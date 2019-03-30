export function joiningString(arr) {
    return arr.join(', ');
}

export function resetUserDetails(){
    return {
        masterId: '',
        userId: '',
        registrationProvider: "SBIS",
        roleName: "INDIVIDUAL",
        userName: '',
        firstName: '',
        lastName: '',
        name: "",
        password: "",
        passwordInvalid: false,
        confirmpassword: "",
        passwordStrength: {
            strength: 0,
            strengthText: '',
            color: '',
        },
        token: '',
        emailAddress: '',
        contactNo: '',
        numberValid: "",
        groupId: null,
        medicalHistory: {},
        selectedAddressIndex: 0,
        addresses: [],
        updateSection: "ADDRESS",
        id: '',
        addCustomAddress: false,
        addressList: [],
        addressDetails: {
            addressType: '',
            line1: '',
            line2: '',
            country: '',
            city: '',
            pinCode: '',
            state: '',
        },
    };
}