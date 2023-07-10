## interpolation
{{ data }}

## binding
an instruction we give to vue to bind/set the value of a html atribute.

## methods, 
- you can use methods inside the interpolation brackets, youcan do simple math operation and ternary operation bu not forloop or if else statements

## events
usually to btns on click v-on:event 
you can have more than one event in a element!
### event modifiers:

#### submit events:
- v-on:submit.prevent = will do the e.preventDefault()

#### click events:
- v-on:click.middle = when middle click is pressed
- v-on:click.right = when right click is pressed
- v-on:click.left = this is the default setting

#### keyup/keydown events:
- v-on:keyup="function_name" = this fires on any key event

- v-on:keyup.enter="function_name" = this fires on any key event
- v-on:keyup.ctrl="function_name" = this fires on control key release event
- v-on:keyup.page-up="function_name" = this fires on page-up key release event

quick hand syntax:
```html
      <input
        type="text"
        v-on:input="setText($event)"
      />
      <input
        :value="text"
        @input="event => text = event.target.value"
      />
```
### v-once directive:

this directive creates an initial evaluation and doesnt update:

```html
<p v.once> {{ data }} </p>
```
the displayed data will not update despite of the actual data changing

## Computed properties:

- are methods that vue will be aware of there dependencies and only will execute if one of the dependencies chages.

- you want to use the computed properties instead of methods for performance sake.

## watchers

- watch over a data value, recives that value as an argument automaticaly, and returns nothig but can trigger further logics base on the data being watch.
- it can recieve old and new values as argument.
- it becomes wordy ehrn need to watch over to different datas at once, for that is better to use computed instead. 
- utilities: timers, https requests,  
syntax:
```js
{
    data(){
    foo:"",
    },
    watch:{
        foo(){
            /*when foo changes apply logic*/
            /*notice that data name and function name are the same in order to work*/
        }
    }
}
```