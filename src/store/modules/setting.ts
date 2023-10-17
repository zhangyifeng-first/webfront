import { defineStore } from 'pinia'


let useLayoutSettingStore = defineStore('SettingStore', {
    state: () => {
        return {
            isExpand: false
        }
    }
})

export default useLayoutSettingStore