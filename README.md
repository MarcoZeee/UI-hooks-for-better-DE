## React UI hooks ##

This library is to streamline UI development process.

### useScrollBar ### 

You might wonder how to implement a reading process bar with React when scrolling.

![reading process bar](/public/processBar.png)

Now you can use hook `useScrollBar` to implement a reading process bar. 

Clone the repo: 

    git clone https://github.com/MarcoZeee/React-custom-hooks

    cd React-custom-hooks/src/useScrollBar

copy the source code to the local utils folder, e.g. `utils/useScrollBar.js`


Before using this library, you need to install **styled-components** .

    npm install styled-components

    or 

    yarn add styled-components

#### Usage ####

```js
import { useScrollBar } from 'utils/useScrollBar.js';

const [size, Div] = useScrollBar();

```

then to implement the scroll bar, you can use the following code:

```js
<UserDefinedFragment>
    <Div barSize={size}/>
</UserDefinedFragment>

```
With only a few steps, now you got the process bar for page scroll.

Even better, you can name the process bar and prop as you like, for example:

```js
const [length, WeirdComponent] = useScrollBar();

<UserDefinedFragment>
    <WeirdComponent barSize={length}/>
</UserDefinedFragment>

```


