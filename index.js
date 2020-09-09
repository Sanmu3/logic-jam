for (var y = 1; y < 11; y++) {
    for (var x = 1; x < 11; x++) {

        if (x >= y && x + y < 12 || x <= y && x + y > 10 )
        {
            document.write('*')
        } else {
            document.write('_')
        }

    }
    document.write('<br/>')
}