export const profileTypes = {
  GET_PROFILE_LIST: 'GET_PROFILE_LIST',
  SAVE_PROFILE_LIST_RESPONSE: 'SAVE_PROFILE_LIST_RESPONSE',
  CLEAR_PROFILE_LIST: 'CLEAR_PROFILE_LIST'
}

export const profileActions = {
  getprofilelist: (params) => ({
    type: profileTypes.GET_PROFILE_LIST,
    params
  }),
  saveprofilelistResponse: (data) => ({
    type: profileTypes.SAVE_PROFILE_LIST_RESPONSE,
    data
  }),
  clearprofilelist: () => ({
    type: profileTypes.CLEAR_PROFILE_LIST
  })

}

export const updateprofileActionsTypes = {
  UPDATE_PROFILE: 'UPDATE_PROFILE',
  SAVE_UPDATE_PROFILE_RESPONSE: 'SAVE_UPDATE_PROFILE_RESPONSE',
  CLEAR_UPDATE_PROFILE: 'CLEAR_UPDATE_PROFILE'
}

export const updateprofileActions = {
  updateprofile: (params) => {
    return {
      type: updateprofileActionsTypes.UPDATE_PROFILE,
      params
    }
  },
  saveupdateprofileResponse: data => ({
    type: updateprofileActionsTypes.SAVE_UPDATE_PROFILE_RESPONSE,
    data
  }),
  clearupdateprofile: () => ({
    type: updateprofileActionsTypes.CLEAR_UPDATE_PROFILE
  })
}

export const MultifileAddTypes = {
  GET_MULTIFILE_PROFILE_DETAILS: 'GET_MULTIFILE_PROFILE_DETAILS',
  PROFILE_MULTIFILE_DETAILS_RESPONSE: 'PROFILE_MULTIFILE_DETAILS_RESPONSE',
  CLEAR_MULTIFILE_PROFILE_DETAILS: 'CLEAR_MULTIFILE_PROFILE_DETAILS'
}

export const MultifileAddActions = {
  getMultifileProfileDetails: (data, name) => ({
    type: MultifileAddTypes.GET_MULTIFILE_PROFILE_DETAILS,
    payload: { data, name }
  }),
  saveMultifileProfileDetailsResponse: data => ({
    type: MultifileAddTypes.PROFILE_MULTIFILE_DETAILS_RESPONSE,
    data
  }),
  clearMultifileProfileDetails: () => ({
    type: MultifileAddTypes.CLEAR_MULTIFILE_PROFILE_DETAILS
  })
}

export const ImageDeleteActionsTypes = {
  REQUEST: 'USER_IMAGE_DELETE_REQUEST',
  RESPONSE: 'USER_IMAGE_DELETE_RESPONSE',
  ERROR: 'USER_IMAGE_DELETE_ERROR',
  CLEAR: 'USER_IMAGE_DELETE_CLEAR'
}

export const ImageDeleteActions = {
  delete: (id) => ({
    type: ImageDeleteActionsTypes.REQUEST,
    id
  }),
  saveResponse: (data) => ({
    type: ImageDeleteActionsTypes.RESPONSE,
    data
  }),
  clear: () => ({
    type: ImageDeleteActionsTypes.CLEAR
  })
}

