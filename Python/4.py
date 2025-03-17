citas = {
    "12345678": {"nombre": "Juan Pérez", "día": "Lunes", "hora": "10:00 AM"},
    "87654321": {"nombre": "María Gómez", "día": "Martes", "hora": "2:00 PM"},
    "11223344": {"nombre": "Carlos López", "día": "Miércoles", "hora": "9:00 AM"}
}

documento = input("Ingrese su documento: ")
cita = citas.get(documento)

if cita:
    print(f"Nombre: {cita['nombre']}, Día: {cita['día']}, Hora: {cita['hora']}")
    cambio = input("¿Desea cambiar su cita? (si/no): ")
    if cambio.lower() == "si":
        nuevo_dia = input("Ingrese el nuevo día: ")
        nueva_hora = input("Ingrese la nueva hora: ")
        cita["día"] = nuevo_dia
        cita["hora"] = nueva_hora
        print("Cambio realizado con éxito. Nueva cita:")
        print(f"Nombre: {cita['nombre']}, Día: {cita['día']}, Hora: {cita['hora']}")
else:
    print("Documento no encontrado.")