import React from 'react'

let tableCellPadding = 8

/*
Component styles for the Grey Vest library. Each of these should be associated
with a specific omponent in the lib. The css/emotion refactor will move each of
these styles into its respective component - when it's finished, we should be
able to kill this file.
*/
export default () => (
  <style>
    {`
      /* Button */
      .gv-link-button {
        /* Same as a contexture-themed link */
        color: #0076DE;
        background-color: transparent;
        border: none;
        cursor: pointer;
        text-decoration: underline;
        display: inline;
        margin: 0;
        padding: 0;
      }
      .gv-link-button:hover,
      .gv-link-button:focus {
        text-decoration: none;
      }

      /* CheckButton */
      .gv-button.check-button {
        padding: 5px 23px 5px 10px;
      }
      .gv-button.check-button .gv-checkbox {
        height: 30px;
        width: 30px;
        font-size: 20px;
        margin-right: 8px;
      }
      .gv-button.check-button .gv-checkbox i {
        font-size: 20px;
      }
      .gv-button.check-button .gv-checkbox.checked {
        color: #0076de;
        background-color: transparent;
        border-color: transparent;
      }

      /* Text Button */
      .gv-text-button {
        border-radius: 100px;
        padding: 5px;
        cursor: pointer;
        color: #9b9b9b;
        display: inline-block;
        transition: background-color .1s linear, color .1s linear;
      }
      .gv-text-button > * {
        vertical-align: middle;
      }
      .gv-text-button i {
        width: 20px;
        height: 20px;
        font-size: 20px;
      }
      .gv-text-button:hover {
        background-color: rgba(216, 216, 216, 0.4);
        color: #000;
      }
      .gv-text-button.active, .gv-text-button.primary {
        background-color: #0076de;
        color: #fff;
      }

      /* Search Bar + Button */
      .gv-search-bar {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 30px;
        top: 5px;
        z-index: 1;
        /*background: #f6f6f6;*/
      }
      .gv-search-bar .gv-box {
        padding: 8px 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
      }
      .gv-search-bar > .gv-button-group {
        box-shadow: 0 2px 10px 0 rgba(39, 44, 65, 0.1);
      }
      .gv-search-bar .gv-box .tags-input {
        margin: 0;
        border: none;
      }
      .gv-search-button {
        font-size: 18px;
      }
      .gv-search-toolbar {
        display: flex;
        align-items: center;
        padding: 15px;
        background-color: #fff;
      }
      .gv-search-toolbar .gv-text-button {
        margin-right: 5px;
      }
      .gv-search-toolbar .gv-text-button:last-child {
        margin-right: 0;
      }

      
      /* this is part of NestedPicker */
      .panel-tree-picker {
        max-height: 640px;
      }
      .panel-tree-picker > div {
        border-right: solid 1px #eef0f1;
      }
      .panel-tree-picker > div:last-child {
        border-right: none;
      }

      .gv-text-error {
        color: #D75050;
      }
      .gv-block-error {
        margin: 15px 0;
        color: #D75050;
        background-color: #D7505011;
        padding: 12px;
        border-radius: 5px;
      }

      .labeled-checkbox {
        display: flex;
      }
      .labeled-checkbox > span {
        padding-left: 10px;
      }
    `}
  </style>
)
