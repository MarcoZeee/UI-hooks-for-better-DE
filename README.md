## React UI hooks ##

This library is to streamline UI development process.

### useProgressBar ### 

You might wonder how to implement a reading process bar with React when scrolling.

![reading progress bar](/public/processBar.png)

Now you can use hook `useProgressBar` to implement a reading process bar. 

Clone the repo: 

    git clone https://github.com/MarcoZeee/React-custom-hooks

    cd React-custom-hooks/src/useScrollBar

copy the source code to the local utils folder, e.g. `utils/useProgressBar.tsx`



#### Usage ####

This code exports a custom React hook named useProgressBar that provides a progress bar component that updates as the user scrolls through the page.

The hook uses several React hooks including useState, useRef, useEffect, and useMemo.

The `<ProgressBar/>` component is created using the ProgessBar function, which takes a prop named value that determines the progress of the bar. The ProgressBar component is then memoized using useMemo with progress as a dependency so that it only updates when the progress changes.

The `useProgressBar` hook returns an object containing the memoized ProgressBar component.

Inside the `useProgressBar` hook, a `progress` state variable is created using the useState hook and initialized to zero. A `prevScrollY` reference variable is created using the useRef hook and initialized to zero as well.

The `maxScroll` constant is calculated by subtracting the window height from the body height, which gives the maximum scrollable area of the page.

The updateProgressBar function is defined to update the progress state with the new progress value.

An useEffect hook is used to add an event listener to the window object that listens to the scroll event. The handleScroll function is called whenever the scroll event occurs. The handleScroll function updates the prevScrollY reference variable with the current scroll position and calculates the new progress value based on the current scroll position and the maximum scrollable area of the page. The updateProgressBar function is then called with the new progress value to update the progress bar.

The useEffect hook also returns a cleanup function that removes the event listener when the component unmounts to avoid memory leaks.

Overall, this hook provides an easy-to-use progress bar component that updates dynamically as the user scrolls through the page.