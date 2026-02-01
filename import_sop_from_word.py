import os
from docx import Document
import re

# Config: Where to save the files
OUTPUT_DIR = "schuldiner-sop/docs"

# The 13 Major Sections from your Table of Contents
HEADERS = [
    "General Lab Stuff",
    "Lab Culture and Life",
    "Files and Electronic Storage",
    "Plasmids",
    "DNA Gels",
    "Strains and Media",
    "Transformations",
    "General Yeast Growth",
    "Singer Plates and Pads",
    "SGA and Libraries",
    "Western blots",
    "Microscopy",
    "Orders"
]

def clean_filename(text):
    return re.sub(r'[\\/*?:"<>|]', "", text).replace(" ", "-").lower()

def get_admonition_type(text):
    """Auto-detects tone to apply Docusaurus color coding"""
    lower = text.lower()
    if any(x in lower for x in ["warning", "danger", "contamination", "hazard", "poison", "stop"]):
        return ":::danger"
    if any(x in lower for x in ["note", "please", "remember", "check"]):
        return ":::note"
    if any(x in lower for x in ["tip", "hint", "trick", "recommend"]):
        return ":::tip"
    return None

def process_docx(file_path):
    if not os.path.exists(file_path):
        print(f"Error: Could not find {file_path}")
        return

    doc = Document(file_path)
    
    current_header = "Intro"
    content_buffer = []
    
    # Ensure output directory exists
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)

    print(f"Processing {file_path}...")

    for para in doc.paragraphs:
        text = para.text.strip()
        if not text:
            continue

        # Check if this line is a Major Header
        # We check if the line *starts with* a known header (case insensitive)
        is_header = False
        for h in HEADERS:
            if text.lower().startswith(h.lower()) and len(text) < len(h) + 5:
                # Save previous section
                save_file(current_header, content_buffer)
                
                # Start new section
                current_header = h
                content_buffer = []
                is_header = True
                break
        
        if is_header:
            continue

        # Formatting: Check for Bold/Italic runs if needed, but for now we grab full text.
        # Auto-apply Admonitions to bullet points
        if text.startswith("-") or text.startswith("*"):
            tag = get_admonition_type(text)
            if tag:
                # Wrap the bullet point in an admonition
                content_buffer.append(f"\n{tag}\n{text}\n:::\n")
            else:
                content_buffer.append(f"* {text.lstrip('- ')}")
        else:
            content_buffer.append(text)

    # Save the last section
    save_file(current_header, content_buffer)
    print("Done! Files generated in /docs")

def save_file(header, lines):
    if not lines:
        return
    
    filename = clean_filename(header) + ".md"
    filepath = os.path.join(OUTPUT_DIR, filename)
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(f"# {header}\n\n")
        f.write("\n\n".join(lines))
    print(f"Created: {filepath}")

if __name__ == "__main__":
    # Make sure this matches your exact filename
    file_name = "SOP Schuldiner Lab 2025.docx" 
    process_docx(file_name)