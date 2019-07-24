/**
 * Augment the typings of Vue.js
 */

import Vue, { ComponentOptions } from 'vue'
// import { User } from "../../server/services/v1/users/users.interface";

interface openToastArgs {
  duration: number
  message: string
  position: string
  type:string
}
interface Toast<T = any> {
  open (openToastArgs):void
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    auth?: boolean
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $toast: Toast
    $dialog: any
    $loading: any
    $modal: any
    $snackbar: any
  }
}