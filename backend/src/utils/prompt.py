import os

def create_tree_structure(directory, level=0, file=None):
    """Recursively iterate over a directory and create a tree structure."""
    if file is None:
        file = open("file_tree_and_content.txt", "w")
        
    file.write(f"{directory}\n")  # Write directory structure at the top

    for item in os.listdir(directory):
        path = os.path.join(directory, item)
        if os.path.isfile(path):
            file.write(f"{'  ' * level}{item}\n")
            try:
                with open(path, "r", encoding="utf-8") as f:
                    file.write(f.read())
                    file.write("\n\n")
            except UnicodeDecodeError:
                file.write(f"Failed to read {item}: File is not UTF-8 encoded\n")
        elif os.path.isdir(path):
            file.write(f"{'  ' * level}{item}/\n")
            create_tree_structure(path, level=level+1, file=file)

if __name__ == "__main__":
    parent_folder = "/Users/dineshdhakar/Downloads/mernProjectEcommerce-master/backend"
    create_tree_structure(parent_folder)
