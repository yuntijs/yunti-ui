---
nav: Components
group: Utils
title: FormHelper
description: Enhanced component for Form
---

# FormHelper

Form enhancement component, currently supporting:

- autoFocus: automatically selecting the first non-disabled and non-readonly input or textarea of the form when focused.

## Usage

### React component FormHelper

Wrap the Form component with FormHelper. Supported attributes include:

| props     | description                                                                                                    | default | required |
| --------- | -------------------------------------------------------------------------------------------------------------- | ------- | -------- |
| autoFocus | Automatically select the focus state of the first non-disabled and non-readonly input or textarea in the form. | true    | false    |
| id        | The id of the outer wrapping div.                                                                              | -       | false    |
| className | The className of the outer wrapping div.                                                                       | -       | false    |
| style     | The style of the outer wrapping div.                                                                           | -       | false    |

#### usage

<code src="./demos/FormHelperDemo"></code>

### withFormHelper - Higher-Order Component (HOC)

As a higher-order component, withFormHelper supports the same parameters as the React component FormHelper.

#### usage

<code src="./demos/HocFormHelper"></code>

### useAutoFocus - hooks

Supports passing a ref, id, or DOM element as a parameter.

#### Example of a ref parameter:

<code src="./demos/RefUseAutoFocus"></code>

#### Example of a id parameter:

<code src="./demos/IdUseAutoFocus"></code>

#### Example of a dom parameter:

<code src="./demos/DomUseAutoFocus"></code>
