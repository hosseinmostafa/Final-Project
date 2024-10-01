import { AbstractControl } from '@angular/forms';

export function ForbiddenNameValidator(control: AbstractControl) {

    const forbidden = /admin/.test(control.value),
        forbidden2 = /Admin/.test(control.value),
        forbidden3 = /administrator/.test(control.value),
        forbidden4 = /Administrator/.test(control.value)
        
    return forbidden ? { 'forbiddenName': { value: control.value } } : null
        || forbidden2 ? { 'forbiddenName': { value: control.value } } : null
            || forbidden3 ? { 'forbiddenName': { value: control.value } } : null
                || forbidden4 ? { 'forbiddenName': { value: control.value } } : null
}
