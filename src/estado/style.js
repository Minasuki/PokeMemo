export const principal = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    paddingTop: '10px',
    alignItems: 'center',
}

export const opcion = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    gap: 2,
    alignItems: 'center'
}

export const tarjetas = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '95%',

    "@media (max-width: 600px)": {
        justifyContent: 'space-between',
    },
}

export const dificultad_style_1 = {
    textAlign: 'center',
    padding: '10px 0',

    "@media (max-width: 600px)": {
        alignItems: 'flex-start',
        display: 'none'
    },
}

export const dificultad_style_2 = {
    textAlign: 'center',
    padding: '10px 0',
    width: '60%',

    "@media (min-width: 600px)": {
        alignItems: 'flex-start',
        display: 'none'
    },
}

export const botonNJ = {
    height: '40px',

    "@media (max-width: 600px)": {
        display: 'none'
    },
}

export const boardFControl = {
    "@media (max-width: 600px)": {
        alignItems: 'flex-start',
        // display: 'none'
    },
}