import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


function ModalEliminarEditarCancelar ({ item, handleEdit, handleDelete, cerrarModalEditar }) {
    // const cerrarModalEditar = 
    console.log("modal",item);
    return (
    <Modal>
        <View style={styles.modalContainer}>
        <TouchableOpacity onPress={handleEdit}>
            <View style={styles.modalOption}>
            <Icon name="edit" size={40} color="blue" />
            <Text style={styles.modalOptionText}>Editar</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
            <View style={styles.modalOption}>
            <Icon name="trash" size={40} color="red" />
            <Text style={styles.modalOptionText}>Eliminar</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={cerrarModalEditar}>
            <View style={styles.modalOption}>
            <Icon name="times" size={40} color="black" />
            <Text style={styles.modalOptionText}>Cancelar</Text>
            </View>
        </TouchableOpacity>
        </View>
    </Modal>
    )}

    const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#06181e',
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalTitle: {
        color: "#30bced",
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      modalInput: {
        color: "#30bced",
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
      },
      modalButtonsContainer: {
        flexDirection: 'row',
      },
      modalButton: {
        backgroundColor: 'blue',
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
      },
      modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
    }
    }) 

    export {ModalEliminarEditarCancelar};