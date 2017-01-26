# Aurum Styles (AU)
AU : Gold : 79 : Aurum : Styles

## Overview
### Style components

Developers who collaborate on large applications can experience the problem of "shopping" for functionality. Best practices that include CSS standardization are helpful but are sometimes difficult to enforce without strict peer review and a strong development culture of information sharing. There is a tendency for stylesheets to accumulate a great deal of functionality to the point that ambiguity within the overall design of the application can easily occur.

Approaches (patterns) have been established to qualify styles such that developers are given rules regarding where/how a style should be defined within the application but even these approaches are not immune to hiding or redundantly defining styles due to an inability of a developer to easily identify where a related previously created style exists. For example a development team might choose to define `<button>` styles within a stylesheet just for the `<button>` element. Does this mean that every "oddball" `<button>` that specified within the system must be defined within this "standard" stylesheet or is it better to override (extend) a `<button>` style defined within the "standard" `<button>` stylesheet or is it better to "go rogue" and build a "one off button"? And as these types of decision are made the complexity of the application grows as does the difficulty of the development process.
         
The complexity of the application is increased as third-party components, frameworks, and design patterns are adopted within the application. Experienced development teams may not see this complexity as a significant "problem" because they have excellent memories and talented developers who know the system well. Overall the tendency to treat the software artifacts of a specific project as "finite" (not very significant outside the specific project in which these were created). But for organizations who are in the process of migrating existing applications and developing new applications for the web establishing a true library of styles that can de readily used and dynamically combined to provide an extensive range of styling capability. And in cases where unique styling is required, a strong base is provided where only minimal (localized) override of the standard styles will be required. In cases where a customized style has greater reusability within a solution a means by which to cleanly (consistently) extend the framework is provided.     

### Angular 2+ Style Component Bundling

Angular 2+ supports [component styles](https://angular.io/docs/ts/latest/guide/component-styles.html) that enable developers to bundle styles within components. This style bundling capability is valuable for organizations that seek to leverage development assets between multiple projects and applications. By combining the use of a framework style component library approach with Angular 2+ Style bundling compact (well-delineated) solution components can be evolved and shared.

## Usage Principals

The Aurum Framework organizes styling at the SCSS variable, HTML element, HTML element style attribute, class, and Angular 2+ component bundled style levels.  

Every style component (where style components are files in which one or more CSS style attributes are assigned) resides within its own directory within the library and is comprised of a variables file and a component style file.

### SCSS variables

Every Aurum component has a variables file that defines the values of individualized CSS attributes, HTML element CSS attributes, CSS class attributes, and Angular 2+ component bundled styles.

The variables defined within variable files are used within CSS attribute files to assign CSS attribute values. The file containing the SCSS variables is always named `_variables.scss` or `variables.scss` and the SCSS file in which the CSS attributes are assigned from the variables is named to correspond to the HTML element, HTML element attribute, CSS Class, or Angular 2+ Component. The CSS assignment file imports the `_variables.scss` file at or very near the top of the file.

__Example:__ styling specific to the HTML `<body>` element
       
##### _variables.scss
       
```css
$body-width: 100% !default;
$body-height: 100% !default;

$body-margin-top: 0 !default;
$body-margin-right: 0 !default;
$body-margin-bottom: 0 !default;
$body-margin-left: 0 !default;
$body-margin: $body-margin-top $body-margin-right $body-margin-bottom $body-margin-left !default;

$body-padding-top: 0 !default;
$body-padding-right: 0 !default;
$body-padding-bottom: 0 !default;
$body-padding-left: 0 !default;
$body-padding: $body-padding-top $body-padding-right $body-padding-bottom $body-padding-left !default;
```
##### _body.scss

```css
@import "_variables";

body {
  width: $body-width;
  height: $body-height;

  margin: $body-margin;
  padding: $body-padding;
}
```

The framework contains a collection of Aurum base (common, standard, generic, branded, themed) SCSS variable files. The variable values contained within these files are intended to be used to set the variables within the various HTML element, HTML element attribute, CSS class, or Angular 2+ component bundled style SCSS variables. This approach facilitates easy propagation of styling standards within an application. Users of Aurum Styles are encouraged to adjust these values to meet the requirements of their organization and projects.   

__Example:__ Aurum core variables used to set padding and margin attribute values

##### _gaps.scss
       
```css
$gap-none: 0 !default;
$gap-smallest: .125rem !default;
$gap-smaller: .25rem !default;
$gap-small: .5rem !default;
$gap-medium: 1rem !default;
$gap-large: 2rem !default;
$gap-larger: 4rem !default;
$gap-largest: 8rem !default;
```

##### _margin.scss _(snippet)_

```css
@import "../variables/_gaps";

...

@include margin-generator('-none', $gap-none);
@include margin-generator('-smallest', $gap-smallest);
@include margin-generator('-smaller', $gap-smaller);
@include margin-generator('-small', $gap-small);
@include margin-generator('-medium', $gap-medium);
@include margin-generator('-large', $gap-large);
@include margin-generator('-larger', $gap-larger);
@include margin-generator('-largest', $gap-largest);

...
```

##### Global vs. Local usage of Aurum base variables

Aurum base (common, standard, generic, branded, themed) SCSS variable files can be included at the root of the application by loading these from `index.html` or with Angular 2+ with webpack using a `require(')` statement. Doing so provides global access to these variables within Angular 2+ component with bundled styles. Additionally, Aurum base variable files can be directly imported by the `_variable.scss` file of an Angular 2+ component to allow a developer to selectively override (revert to) base styles where a desired base style was override deeper within the application.  

Development teams have the option of not exposing Aurum base variables at the global level in preference to requiring every Angular 2+ component to always directly `@import` the necessary base variables. This approach allows team to be very explicit regarding the styles in use but requires more discipline within the team to be sure to use appropriate base variables values. 

##### !default (presetting Aurum variables)

Aurum best practices require the use of the [SCSS default flag](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_) for all variable declarations to allow the development team to preset values of SCSS variables to effectively override the values defined by Aurum or within in Angular 2+ components that declare these same variables.

### HTML Attribute (component style files)

HTML attribute component style files provide definitions used to set single or related CSS attributes of an HTML element such as the `font-size` attribute or simultaneously the `display` and `position` attributes. The style definitions within these files enable the application to style HTML elements using `au=" "` notation on any HTML element. Multiple HTML Attribute `au=" "` selectors can be applied to element.
  
__Example:__ set the CSS `display` and `margin` attributes on nested `<div>` elements
  
```css
<div au="flex margin-vertical-medium">
  <div au="inline-flex margin-top-smaller">Some text</div>
  <div au="inline-flex margin-bottom-smaler">Some more</div>
<div>
```
Use HTML Attribute component styles locally, typically for use within an Angular 2+ component.

##### au=" " notation

Aurum attributes can be set using either `au=" "` notation (as illustrated above) or pure attribute notation. To use pure attribute notation each `au` attribute must be "turned on" by setting a corresponding `au-styles` flag within a parent HTML element within the application DOM. 

__Example:__ `au="distributed"` vs. `au-styles="distributed"`

```html
<html>
  <div au="distributed">
    <span></span>
    <span></span>
    <span></span>
  </div>
</html>
```

```html
<html au-styles="distributed"> <!-- turns on the ability to use the distributed attribute to set styling -->
  <div distributed>
    <span></span>
    <span></span>
    <span></span>
  </div>
</html>
```

The `au-styles=" "` form makes sense in cases where a specific Aurum style is frequently used within an application. 

### HTML Element (component style files)

Use HTML element component styles locally, typically for use within an Angular 2+ component.

Aurum element styles define base styling for an application and can also be used to reconcile (override) browser rendering differences.

### CSS Class (component style files)

Use CSS Class component styles globally, typically in cases for smaller recurring sub-components or HTML structural patterns emerge that do not meet project criteria to be developed into standalone Angular 2+ components. In cases where a CSS Class is frequently reused within an application.      

### Angular 2+ (component bundled styles)

All (most) Angular 2+ components should utilize bundled styles to containerize component styling to promote ease of reuse of the component. 

Angular 2+ components follow the `_variable.scss`, `_xxx.scss` naming pattern where the `xxx.html`, `xxx.ts`, and `xxx.spec.ts` files reside within a single component source directory within the project. The `_variable.scss` file normally imports one or more base variable files from the Aurum SCSS base directory to obtain the standardize variable values of the project. The `_xxx.scss` file then in turn imports the Angular 2+ component `variables.scss` file. The Angular 2+ component `xxx.scss` file can also import specific Aurum HTML attribute, Aurum HTML element, or Aurum HTML class SCSS files in cases where the application design seeks to avoid global style definitions in favor of more controlled localized styles. Additionally, `_variable.scss` files from other components can be imported in cases where components share common (or derived) styling.
    
To facilitate and promote component style sharing best practices dictate that imported variables always be assigned to component specific variables prior to use as attribute values.
 
__Example:__ set the `manager.ts` component `<button>` variables from Aurum base and `card` component variables
```css
@import '../../../../../core/styles/variables/_duration';
@import '../../../../../core/styles/variables/_font';
@import '../../../../../core/styles/variables/palette/_brand.primary';
@import '../../../../../core/styles/variables/palette/_grayscale';

@import '../../../../../core/components/card/variables';

$manager-button-border: $card-border !default;
$manager-button-min-height: $card-min-height !default;
$manager-button-text-font-size: $font-4-size !default;
$manager-button-text-font-weight: 500 !default;

$manager-button-text-color: $brand-primary !default;
$manager-button-transition: background-color $duration-short !default;

$manager-button-focus-background-color: $gray-lightest !default;
```
---
MIT License

Copyright (c) 2017 John Hart

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
