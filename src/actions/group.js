import { doGet, doDelete, doPut, doPost } from '../api/utils';
import { USER_TYPE } from '../constants/actionReducerConstants';
import { URI } from '../constants';

// ================ For Update State ====================
export function updateState(payload) {
    return {
        type: USER_TYPE.UPDATE_STATE,
        payload
    };
};

// ================ Get MyGroup ===================
export function getMyGroup() {
    //console.log("trigger..")
    return (dispatch, getState) => {

        const { userDetails } = getState().userState;
        const userParam = userDetails.userId;
        const tokenValue = userDetails.token;

        dispatch({
            type: USER_TYPE.GET_MYGROUP
        });
        doGet(`${URI.getMyGroup}${userParam}/groups`, needToken = true, tokenValue)
            .then(result => dispatch(getMyGroupSuccess(result)))
            .catch(error => dispatch(getMyGroupFailure(error)));
    };
};

export function getMyGroupSuccess(payload) {
    //console.log('Arpan Khan',payload);
    return {
        type: USER_TYPE.GET_MYGROUP_SUCCESS,
        payload,
    };
};

export function getMyGroupFailure(error) {
    return {
        type: USER_TYPE.GET_MYGROUP_FAILURE,
        error,
    };
}

// ======================= Add Group =====================

export function addGroup() {
    return (dispatch, getState) => {
        //console.log("Trigger......")
        const { addGroup, userDetails } = getState().userState;
        const tokenValue = userDetails.token;
        
        const addGroupParams = {
            "userId": userDetails.userId, 
            "groupName": addGroup.groupName, 
        };

        //console.log("addGroupParams ", addGroupParams);
        dispatch({
            type: USER_TYPE.ADD_GROUP
        });

        //const tokenValue = userDetails.token;

        doPost(`${URI.addGroup}`, addGroupParams, true, true, tokenValue)
            .then(result => {
                // console.log(result.status);
                if (result.status === 2000) {
                    dispatch(getMyGroup());
                    //console.log('Add Group');
                    
                } else {
                    alert('Something wrong');
                }

            })
            .catch(error => dispatch(addGroupFailure(error)));
    };
}
export function addGroupSuccess(payload) {
    //console.log(payload);
    return {
        type: USER_TYPE.ADD_GROUP_SUCCESS,
        payload,


    };
}
export function addGroupFailure(error) {
    return {
        type: USER_TYPE.ADD_GROUP_FAILURE,
        error,
    };
}

// ================= View Group Member ==================

export function viewGroupMember() {
    return (dispatch, getState) => {

        const { userDetails, groupDetails } = getState().userState;
        const groupId = groupDetails.id;
        //const groupId = "506";
        const tokenValue = userDetails.token;
        dispatch({
            type: USER_TYPE.VIEW_GROUP_MEMBER
        });
        doGet(`${URI.viewGroupMember}${groupId}/inusers`, needToken = true, tokenValue)
             .then(result => dispatch(viewGroupMemberSuccess(result)))
             .catch(error => dispatch(viewGroupMemberFailure(error)));
        
    };
};

export function viewGroupMemberSuccess(payload) {
    //console.log('Arpan Khan',payload);
    return {
        type: USER_TYPE.VIEW_GROUP_MEMBER_SUCCESS,
        payload,
    };
};

export function viewGroupMemberFailure(error) {
    return {
        type: USER_TYPE.VIEW_GROUP_MEMBER_FAILURE,
        error,
    };
}

// ================= Delete Group Member ==================

export function deleteMember() {
    return (dispatch, getState) => {

        const { userDetails, memberDetails } = getState().userState;
        const groupId = memberDetails.groupId;
        const relationshipId = memberDetails.relationshipId;
        const tokenValue = userDetails.token;
        const deleteParams = {
            "": "",
        };

        dispatch({
            type: USER_TYPE.DELETE_GROUP_MEMBER
        });
        doDelete(`${URI.deleteMember}${groupId}/inusers/${relationshipId}`, deleteParams, true, true, tokenValue)
            .then(result => {
                // console.log(result.status);
                if (result.status === 2000) {
                    dispatch(viewGroupMember());
                   
                } else {
                    alert('You Are Not Admin.....');
                }

            })
            .catch(error => dispatch(deleteMemberFailure(error)));
    };
};

export function deleteMemberSuccess(payload) {
    //console.log('Arpan Khan',payload);
    return {
        type: USER_TYPE.DELETE_GROUP_MEMBER_SUCCESS,
        payload,
    };
};

export function deleteMemberFailure(error) {
    return {
        type: USER_TYPE.DELETE_GROUP_MEMBER_FAILURE,
        error,
    };
}

// ===================== Leave Group ======================

export function leaveGroup() {
    return (dispatch, getState) => {
        //console.log("Trigger......")
        const { userDetails } = getState().userState;
        const tokenValue = userDetails.token;

        const leaveGroupParams = {
            "groupId": 0,
            "groupMemberProfilePk": 0
        };

        //console.log("addGroupParams ", addGroupParams);
        dispatch({
            type: USER_TYPE.LEAVE_GROUP
        });

        //const tokenValue = userDetails.token;

        doPost(`${URI.leaveGroup}`, leaveGroupParams, true, true, tokenValue)
            .then(result => dispatch(leaveGroupSuccess(result)))
            .catch(error => dispatch(leaveGroupFailure(error)));
    };
}
export function leaveGroupSuccess(payload) {
    return {
        type: USER_TYPE.LEAVE_GROUP_SUCCESS,
        payload,


    };
}
export function leaveGroupFailure(error) {
    return {
        type: USER_TYPE.LEAVE_GROUP_FAILURE,
        error,
    };
}


// ========================= Search Member ======================

export function searchMember() {
    return (dispatch, getState) => {

        const { userDetails } = getState().userState;
        const query = "tm";
        const pgNo = "1";
        const size = "50";
        const tokenValue = userDetails.token;

        dispatch({
            type: USER_TYPE.SEARCH_MEMBER
        });
        doGet(`${URI.searchMember}${query}&pgno=${pgNo}&size=${size}`, needToken = true, tokenValue)
            .then(result => dispatch(searchMemberSuccess(result)))
            .catch(error => dispatch(searchMemberFailure(error)));
    };
};

export function searchMemberSuccess(payload) {
    //console.log('Arpan Khan',payload.data);
    return {
        type: USER_TYPE.SEARCH_MEMBER_SUCCESS,
        payload,
    };
};

export function searchMemberFailure(error) {
    return {
        type: USER_TYPE.SEARCH_MEMBER_FAILURE,
        error,
    };
}

// ======================= Delete Group ====================

export function deleteGroup() {
    return (dispatch, getState) => {

        const { userDetails, groupDetails } = getState().userState;
        const groupId = groupDetails.id;
        const userId = userDetails.userId;
        const tokenValue = userDetails.token;
        const deleteParams = {
            "": "",
           
        };

        dispatch({
            type: USER_TYPE.DELETE_GROUP
        });
        doDelete(`${URI.deleteGroup}${groupId}/${userId}`, deleteParams, true, true, tokenValue)
            .then(result => {
                
                if (result.status === 2000) {
                    dispatch(getMyGroup());
                    
                } else {
                    alert('You Are Not Admin.....');
                }

            })
            .catch(error => dispatch(deleteMemberFailure(error)));
    };
};

export function deleteGroupSuccess(payload) {
    //console.log('Arpan Khan', payload);
    return {
        type: USER_TYPE.DELETE_GROUP,
        payload,
    };
};

export function deleteGroupFailure(error) {
    return {
        type: USER_TYPE.DELETE_GROUP,
        error,
    };
}


// ================== Edit Member ===================

export function editMember() {
    return (dispatch, getState) => {
        const { userDetails, memberDetails } = getState().userState;
        
        const editMemberDetails = {
            "userId": userDetails.userId, 
            "userName": "Arpan Khan", 
            "groupId": memberDetails.groupId, 
            "relationshipName": "Brother", 
            "firstName": "Arpan", 
            "lastName": "Khan", 
            "relationshipId": memberDetails.relationshipId, 
            "age": 24 
        };
        
        dispatch({
            type: USER_TYPE.EDIT_GROUP_MEMBER
        });
        
        const tokenValue = userDetails.token;
       
        doPut(`${URI.editMember}`, editMemberDetails, true, true, tokenValue)
            .then(result => {
                
                if (result.status === 2000) {
                    dispatch(viewGroupMember());
                    
                } else {
                    alert('Something wrong');
                }

            })
            .catch(error => dispatch(editMemberFailure(error)));
    };
}
export function editMemberSuccess(payload) {
    
    return {
        type: USER_TYPE.EDIT_GROUP_MEMBER_SUCCESS,
        payload,
    };
}
export function editMemberFailure(error) {
    return {
        type: USER_TYPE.EDIT_GROUP_MEMBER_FAILURE,
        error,
    };
}

// ---------------- Add Member -------------------

export function addMember() {
    return (dispatch, getState) => {
        const { userDetails, groupDetails, addMember } = getState().userState;
        const tokenValue = userDetails.token;
        const addMemberParams = {
            "groupId": groupDetails.id,
            "name": addMember.name,
            "contactNo": addMember.contactNo,
            "emailAddress": addMember.emailAddress,
            "minor": addMember.minor,
        };
        dispatch({
            type: USER_TYPE.ADD_MEMBER
        });
        //const tokenValue = userDetails.token;
        doPost(`${URI.addMember}`, addMemberParams, true, true, tokenValue)
            .then(result => {
                if (result.status === 2000) {
                    dispatch(viewGroupMember());
                } else {
                    alert('Something wrong');
                }
            })
            .catch(error => dispatch(addMemberFailure(error)));
    };
}
export function addMemberSuccess(payload) {
    //console.log('Add Member', payload);
    return {
        type: USER_TYPE.ADD_MEMBER_SUCCESS,
        payload,


    };
}
export function addMemberFailure(error) {
    return {
        type: USER_TYPE.ADD_MEMBER_FAILURE,
        error,
    };
}
