"""Agrega campos de respuesta al PDF del kit sin modificar su diseño original.

Uso: python documentacion/kit-metafora/generar_rellenable.py
Requiere PyMuPDF (módulo fitz).
"""
from pathlib import Path
import fitz

ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / 'descargas' / 'Kit_del_caso_a_tu_objeto.pdf'
TARGET = ROOT / 'descargas' / 'Kit_del_caso_a_tu_objeto_rellenable.pdf'
FIELDS = [
    [
        ('objeto_contenido', 'El objeto de aprendizaje que estoy diseñando aborda…'),
        ('aprendizaje_esperado', 'Quiero que quien lo recorra pueda…'),
        ('relaciones_necesarias', 'Para que eso ocurra, necesito organizar, relacionar o hacer visible…'),
    ],
    [
        ('metafora_propuesta', 'Una metáfora que podría ayudarme es…'),
        ('metafora_funcion', 'La pondría a trabajar principalmente en…'),
        ('metafora_cambios', 'Esto modificaría…'),
        ('metafora_prueba', 'Quisiera poner a prueba si…'),
        ('otra_justificacion', 'En esta propuesta elegiría otra organización porque…'),
        ('otra_relaciones', 'Las relaciones que necesito pueden construirse mediante…'),
        ('otra_prueba', 'Quisiera comprobar si…'),
    ],
    [
        ('decision', 'La decisión que quiero ensayar es…'),
        ('observacion', 'Para revisar si funciona, observaría…'),
    ],
]


def build():
    doc = fitz.open(SOURCE)
    assert len(doc) == 3
    assert not doc.is_form_pdf
    for page_index, page in enumerate(doc):
        # Los espacios de respuesta son los recuadros blancos del diseño.
        boxes = [
            drawing['rect'] for drawing in page.get_drawings()
            if drawing.get('fill')
            and all(abs(component - 1) < .001 for component in drawing['fill'])
            and drawing.get('color')
            and drawing['rect'].width > 100
            and drawing['rect'].height > 40
        ]
        # Página 2: completar primero la alternativa A y después la B.
        boxes.sort(key=lambda rect: (round(rect.x0), rect.y0))
        assert len(boxes) == len(FIELDS[page_index])
        spans = [span for block in page.get_text('dict')['blocks'] if 'lines' in block
                 for line in block['lines'] for span in line['spans']]
        for box, (name, label) in zip(boxes, FIELDS[page_index]):
            label_spans = [span for span in spans
                           if box.contains(fitz.Rect(span['bbox']))]
            assert label_spans, name
            label_bottom = max(span['bbox'][3] for span in label_spans)
            # El campo empieza debajo de la consigna, sin cubrirla.
            rect = fitz.Rect(box.x0 + 12, label_bottom + 9,
                             box.x1 - 12, box.y1 - 10)
            assert rect.height >= 30 and box.contains(rect), name
            widget = fitz.Widget()
            widget.field_name = name
            widget.field_label = label
            widget.field_type = fitz.PDF_WIDGET_TYPE_TEXT
            widget.field_flags = fitz.PDF_TX_FIELD_IS_MULTILINE
            widget.field_value = ''
            widget.rect = rect
            # Fuente estándar para escritura compatible con lectores PDF.
            # La tipografía Roboto de la maqueta original se conserva intacta.
            widget.text_font = 'Helv'
            widget.text_fontsize = 10.5
            widget.text_color = (19 / 255, 45 / 255, 72 / 255)
            widget.fill_color = (1, 1, 1)
            widget.border_width = 0
            added = page.add_widget(widget)
            # Los campos y sus respuestas también deben poder imprimirse.
            doc.xref_set_key(added.xref, 'F', '4')
    metadata = doc.metadata
    metadata['title'] = 'Kit de herramientas. Del caso a tu objeto. PDF rellenable'
    metadata['author'] = 'PED'
    metadata['subject'] = 'Guía de trabajo con doce campos de respuesta editables'
    doc.set_metadata(metadata)
    doc.save(TARGET, garbage=4, deflate=True)
    doc.close()
    print(TARGET)


if __name__ == '__main__':
    build()
