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

- @click.stop = stop propagation. if the parent element has a on click event this will prevent that event to trigger over this child element

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
## Conditional rendering:
### v-if, v-else, v-else-if.

- you can't use it if the html elements are not direct siblings to eachother

```html
      <p v-if="goals.length === 0">
        No goals have been added yet - please start adding some!
      </p>

      <ul v-else>
        <li v-for="goal in goals">{{goal}}</li>
      </ul>
```

## v-show
- v-show doesnt deletes the html tag as if-else does but instead sets it css display value to hidden.

## components:

///////

## Vue cli:

- type in your cmd, to install globally 
```cmd
npm install -g @vue/cli
```

- to create a rpoject then type:
```cdm
vue create my-project-name
```
- replace the script in package.json with:

```json
  "scripts": {
    "serve": "set NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve",
    "build": "set NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service build",
    "lint": "set NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service lint"
  }
```

- then you can run in cdm:
```cmd
npm run serve
```
- when you get the local address means is ready and you can copy that address to the browser url to see if is working.
```cdm
  - Local:   http://localhost:8080/
  - Network: http://192.168.0.140:8080/
```

## Creat project Option

1. Use npm init vue instead of installing and using the Vue CLI

2. Use the Volar extension instead of Vetur

You don't have to use either of the two, but you may want to experiment with them. The Vue code you write, is of course 100% the same as shown in this course - no matter which setup you're using.

npm init vue uses an official package to help you initialize Vue projects. You get a command line wizard that walks you through project creation, comparable to what you get with the Vue CLI (though with slightly different choices and options). For a basic Vue project, you can select "No" for all options.

