<template>
    <div>
        <hr>
    <hr class="hr-solid">
    <hr class="hr-dotted">
    <hr class="hr-dotted2">
    <hr class="hr-dashed">
    <hr class="hr-dashed2">
    <hr class="hr-double">
    <hr class="hr-dashed-fixed">
    <hr class="hr-edge-weak">
    <hr class="hr-twill">
    <hr class="hr-twill-colorful">
    <hr class="hr-wavy">
    <hr class="hr-shadow">
    <hr class="hr-mid-circle">
    <hr class="hr-mid-square">
    <hr class="hr-double-arrow">
    <hr class="hr-solid-content" data-content="分割线">
    <hr class="hr-solid-content" data-content="文字自适应 背景透明">
    <hr class="hr-dashed-content" data-content="分隔线">
    <hr class="hr-mid-border-content" data-content="分割线">
    <hr class="hr-mid-border-content" data-content="分隔线">
    </div>
   
</template>

<style>
    .hr-solid {
        border: 0;
        border-top: 1px solid red
    }

    .hr-dotted {
        border: 0;
        border-top: 1px dotted blue
    }

    .hr-dotted2 {
        border: 0;
        border-top: 2px dotted blue
    }

    .hr-dashed {
        border: 0;
        border-top: 1px dashed purple
    }

    .hr-dashed2 {
        border: 0;
        border-top: 2px dashed purple
    }

    .hr-double {
        border: 0;
        border-top: 3px double pink
    }

    .hr-dashed-fixed {
        border: 0;
        padding-top: 1px;
        background: repeating-linear-gradient(to right, red 0px, yellow 5px, transparent 0px, transparent 10px);
        background: repeating-linear-gradient(to right, red 0 var(--dashed-filled, 4px), transparent 0 calc(var(--dashed-filled, 4px)+var(--dashed-open, 6px)));
    }

    .hr-edge-weak {
        border: 0;
        padding-top: 3px;
        background: linear-gradient(to left, transparent, rgb(235, 61, 90), transparent)
    }

    .hr-twill {
        border: 0;
        padding: 5px;
        background: repeating-linear-gradient(135deg, red 0px, purple 0px, transparent 1px, transparent 6px);
    }

    .hr-twill-colorful {
        border: 0;
        padding: 3px;
        background: linear-gradient(135deg, red, orange, green, blue, purple);
        --mask-image: repeating-linear-gradient(135deg, #000 0px, #000 1px, transparent 1px, transparent 6px);
        -webkit-mask-image: var(--mask-image);
        mask-image: var(--mask-image);
    }

    .hr-wavy {
        border: 0;
        color: aqua;
        height: .5em;
        white-space: nowrap;
        letter-spacing: 100vw;
        padding-top: .5em;
    }

    .hr-wavy::before {
        content: "\2000\2000";
        text-decoration: overline wavy;
    }

    .hr-shadow {
        border: 0;
        padding-top: 20px;
        color: blue;
        border-top: 1px solid rgba(0, 0, 0, .1);
        box-shadow: inset 0 10px 10px -10px;
    }

    .hr-mid-circle,
    .hr-mid-square {
        border: 0;
        color: #d0d0d5;
        background: linear-gradient(currentColor, currentColor) no-repeat center;
        background-size: 100% 1px;
    }

    .hr-double-arrow {
        color: #d0d0d5;
        border: double;
        border-width: 3px 5px;
        border-color: #d0d0d5 transparent;
        height: 1px;
        overflow: visible;
        margin-left: 20px;
        margin-right: 20px;
        position: relative;
    }

    .hr-double-arrow:before,
    .hr-double-arrow::after {
        content: "";
        position: absolute;
        width: 5px;
        height: 5px;
        border-width: 0 3px 3px 0;
        border-style: double;
        top: -3px;
        background: radial-gradient(2px at 1px 1px, currentColor 2px, transparent 0) no-repeat;
    }

    .hr-double-arrow::before {
        transform: rotate(-45deg);
        left: -20px;
    }

    .hr-double-arrow:after {
        transform: rotate(135deg);
        right: -20px;
    }

    .hr-solid-content,
    .hr-dashed-content,
    .hr-mid-border-content {
        color: #23C9b6;
        border: 0;
        font-size: 12px;
        padding: 1em 0;
        position: relative;
    }

    .hr-solid-content::before,
    .hr-dashed-content::before,
    .hr-mid-border-content::before {
        content: attr(data-content);
        position: absolute;
        padding: 0 1ch;
        line-height: 1px;
        border: solid red;
        border-width: 0 50vw;
        width: fit-content;
        white-space: nowrap;
        left: 50%;
        transform: translateX(-50%);
    }

    .hr-dashed-content::before {
        border-image: repeating-linear-gradient(90deg, rgb(7, 7, 242), rgb(245, 6, 6) 1px, transparent 1px, transparent 2px)0 85% / / 0 repeat;
    }

    .hr-mid-border-content::after {
        content: attr(data-content);
        position: absolute;
        padding: 4px 1ch;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: transparent;
        border: 1px solid blue;
    }
</style>