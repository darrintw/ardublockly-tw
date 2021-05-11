from os import listdir
from os.path import isfile, isdir, join


def get_file_list(exdir):
    examples_files = []
    dir_files = listdir(exdir)
    for f in dir_files:
        fullpath = join(exdir, f)
        if isfile(fullpath):
            examples_files.append(f)

    return examples_files


def get_examples_files():
    """Return the file list of the examples folder.

    :return: Json with the example files of example path.
    """
    examples_directory = './examples/'
    examples_files = {}

    files = listdir(examples_directory)
    for f in files:
        fullpath = join(examples_directory, f)
        if isdir(fullpath):
            examples_files[f] = get_file_list(fullpath)
        '''
        if isfile(fullpath):
            examples_files.append(f)
        '''

    return examples_files


print(get_examples_files())
