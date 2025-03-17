continentes = {
    "América": ["Brasil", "Argentina", "México", "Canadá", "Chile"],
    "Europa": ["España", "Francia", "Alemania", "Italia", "Reino Unido"],
    "Asia": ["China", "Japón", "India", "Corea del Sur", "Tailandia"],
    "África": ["Nigeria", "Sudáfrica", "Egipto", "Marruecos", "Kenia"],
    "Oceanía": ["Australia", "Nueva Zelanda", "Fiyi", "Papúa Nueva Guinea", "Samoa"]
}

continente = input("Ingrese el nombre de un continente: ")
paises = continentes.get(continente, "Continente no encontrado")
print(f"Países: {paises}")