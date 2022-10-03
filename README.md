# React-design-patterns

## Layout Components

Components that deal primarily with arranging other components on the page. Ex: SplitScreen, List, Modal

**idea:** Components should not know where they're being displayed.

## Container Components

Components that take care of loading and managing data for their child components

**idea:** Components should not know where their data is coming from.

## Uncontrolled Components

Keep track of their own states

## Controlled Components

All state is passesd in as props
**benefits:** validate input field on typing

## Higher Order Components

HOCs are just a functions
Sharing complex behavior between multiple components
Adding extra functionality to existing components
