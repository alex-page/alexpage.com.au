---
layout: page
title: <foundations> Color picker
summary: Welcome to <foundations>, a collection of deep dives into the fabric of design systems brought to you by the Polaris team at Shopify. To kick off 2021 we are going to break down a color picker.
featured: true
date: 2021-02-01
---

Color pickers allow a user to select a color and is often used when modifying a theme or customising a part of the user interface. At Shopify merchants use color pickers to customize their online store. Color pickers can be a simple text input with a preview of the color or be complex with a draggable area and controls for hue and opacity.

![A picture of the firefox colorpicker](firefox-color-picker.jpg)

Before we dive deep into how to create a color picker, we should stop and ask is it worth it?

`<input type="color">` already exists, however it's functionality is confusing and changes across devices and browsers. The native `input` is lacking key features and has varying levels of accessibility depending on the device the user has. Trying to customise the appearance and functionality across multiple browsers is also challenging.

There are many packages and solutions that create color pickers for you today. Many have large amounts of dependencies and may not have the flexibility needed for your system. We are going to break down all the necessary knowledge needed to create one. Today we are going  to look at recreating

Lets go!

---

To start lets break a part the color picker into it's foundations.

1. Label
2. Text input for easy copy and pasting
3. Current selected color
4. Hue, Saturation, Brightness and Alpha gradient
5. Cursor
6. Hue slider
7. Alpha slider


`</foundations>`




1. Brief explanation of `<foundations>`
2. What is a color picker, what value does it give a user
3. Native implementation `input type="color"` and why it's not able to be used
4. Break down of color picker examples and things to consider when building (responsive or set width)
5. Each component, transparent checkboxes, color gradient, touch draggable layer, alpha and hue slider, text input with content
6. HSL and HSB
7. Putting it all together
8. Next steps, screen reader and accessibility, accepting CSS color values, responsive components etc.
9. Conclusion and teaser for next foundations
