import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

global.React = React;
global.render = render;
global.userEvent = userEvent;
global.fireEvent = fireEvent;
