export const DescriptiveDocsItems = [
  {
    title: 'Window',
    imagesrc: 'https://i.imgur.com/hXCB727.png',
    imgw: '100px',
    imgh: '100px',
    description: 'A window or main component for an app.',
    relations: [
      {
        name: 'Type',
        value: 'class'
      },
      {
        name: 'Inherit',
        value: 'widget'
      },
      {
        name: 'Abstract',
        value: 'No'
      }
    ],
    functions: [
      {
        returnType: '',
        functionSyntax: 'Window()'
      },
      {
        returnType: 'void',
        functionSyntax: ' Icon()'
      },
      {
        returnType: 'template <typename type> void',
        functionSyntax: ' Add()'
      },
      {
        returnType: 'template <typename type> void',
        functionSyntax: ' Remove()'
      },
      {
        returnType: 'void',
        functionSyntax: ' InternalWidth()'
      },
      {
        returnType: 'void',
        functionSyntax: ' DefaultSize()',
      },
      {
        returnType: 'void',
        functionSyntax: ' CustomHeaderbar()',
      },
      {
        returnType: 'void',
        functionSyntax: ' Resizable()',
      },
      {
        returnType: 'void',
        functionSyntax: ' Maximize()',
      },
      {
        returnType: 'void',
        functionSyntax: ' Unmaximize()',
      },
      {
        returnType: 'void',
        functionSyntax: ' Fullscreen()',
      },
      {
        returnType: 'void',
        functionSyntax: ' Unfullscreen()',
      },
      {
        returnType: 'void',
        functionSyntax: ' ShowAll()',
      },
      {
        returnType: 'void',
        functionSyntax: ' Quit()',
      }
    ],
    descriptiveFunctions: [
      {
        returnType: '',
        functionSyntax: 'Window(WindowType type, const char *title, WindowPos pos)',
        functionDescription: 'Creates a new window with "type", "title" and "pos" for window.',
        functionNotes: 'Window can be a standalone widget.'
      },
      {
        returnType: 'void',
        functionSyntax: ' Icon(const char *icon)',
        functionDescription: 'Sets a icon for window at runtime.',
      },
      {
        returnType: 'template <typename type> void',
        functionSyntax: ' Add(type &widget)',
        functionDescription: 'Adds a widget to window.',
        functionNotes: 'Window can hold only one widget at a time, and it should be from CGui Widgets only.'
      },
      {
        returnType: 'template <typename type> void',
        functionSyntax: ' Remove(type &widget)',
        functionDescription: 'Removes a widget from window.',
      },
      {
        returnType: 'void',
        functionSyntax: ' InternalWidth(unsinged int width)',
        functionDescription: 'Sets a padding in all directions inside the window.',
      },
      {
        returnType: 'void',
        functionSyntax: ' DefaultSize(unsinged int xsize, unsigned int ysize)',
        functionDescription: 'Sets the default size for window.',
      },
      {
        returnType: 'void',
        functionSyntax: ' CustomHeaderbar(Headerbar &hb)',
        functionDescription: 'Sets the custom headerbar for window.',
      },
      {
        returnType: 'void',
        functionSyntax: ' Resizable(bool resizable)',
        functionDescription: 'Sets whether the window is resizable or not.',
      },
      {
        returnType: 'void',
        functionSyntax: ' Maximize()',
        functionDescription: 'Maximizes the window to be full screen window.',
      },
      {
        returnType: 'void',
        functionSyntax: ' Unmaximize()',
        functionDescription: 'Unmaximizes the window to be the default size.',
      },
      {
        returnType: 'void',
        functionSyntax: ' Fullscreen()',
        functionDescription: 'Makes the full screen window.',
        functionNotes: 'Even the header bar will be hided.'
      },
      {
        returnType: 'void',
        functionSyntax: ' Unfullscreen()',
        functionDescription: 'Makes the full screen window to return it\'s default size.',
      },
      {
        returnType: 'void',
        functionSyntax: ' ShowAll()',
        functionDescription: 'Sets the childrens to be shown on window.',
        functionNotes: '"ShowAll" method should be called after the declaration and addition of CGui Widgets to the window.'
      },
      {
        returnType: 'void',
        functionSyntax: ' Quit()',
        functionDescription: 'Quites the CGui window.',
      }
    ],
    enums: [
      {
        name: 'WindowType',
        contents: [
          {
            name: 'TOPLEVEL',
            usedFor: 'Creates a toplevel standalone window for use.'
          },
          {
            name: 'POPUP',
            usedFor: 'Creates a non toplevel window for popups.'
          }
        ]
      },
      {
        name: 'WindowPos',
        contents: [
          {
            name: 'CEN',
            usedFor: 'Make window positioned center if available.'
          },
          {
            name: 'MOU',
            usedFor: 'Make window positioned on the location of mouse.'
          },
          {
            name: 'CENA',
            usedFor: 'Make window positioned center always.'
          }
        ]
      }
    ]
  },
  {
    title: 'Scrolled Window',
    imagesrc: 'https://i.imgur.com/kB9vED6.png',
    imgw: '100px',
    imgh: '100px',
    description: 'A scrollable window',
    relations: [
      {
        name: 'Type',
        value: 'class'
      },
      {
        name: 'Inherit',
        value: 'widget'
      },
      {
        name: 'Abstract',
        value: 'No'
      }
    ],
    functions: [
      {
        returnType: '',
        functionSyntax: 'ScrolledWindow()'
      },
      {
        returnType: 'void',
        functionSyntax: ' ScrollPolicy()'
      },
      {
        returnType: 'template <typename type> void',
        functionSyntax: ' Add()'
      },
      {
        returnType: 'template <typename type> void',
        functionSyntax: ' Remove()'
      },
      {
        returnType: 'void',
        functionSyntax: ' ShowAll()'
      }
    ],
    descriptiveFunctions: [
      {
        returnType: '',
        functionSyntax: 'ScrolledWindow(Policy hpolicy, Policy vpolicy)',
        functionDescription: 'Creates a new scrolled window with "horizontal policy" and "vertical policy" for scroll bars.',
        functionNotes: 'Scrolled window can not be a standalone widget, it should be added to a "TOPLEVEL" widget.'
      },
      {
        returnType: 'void',
        functionSyntax: ' ScrollPolicy(Policy hpolicy, Policy vpolicy)',
        functionDescription: 'Sets the policies for scroll bar.'
      },
      {
        returnType: 'template <typename type> void',
        functionSyntax: ' Add(type &widget)',
        functionDescription: 'Adds a widget to a scrolled window.',
        functionNotes: 'Scrolled Window can hold only one widget at a time, and it should be from CGui Widgets only.'
      },
      {
        returnType: 'template <typename type> void',
        functionSyntax: ' Remove(type &widget)',
        functionDescription: 'Removes a widget from scrolled window.',
      },
      {
        returnType: 'void',
        functionSyntax: ' ShowAll()',
        functionDescription: 'Sets the childrens to be shown on scrolled window.',
        functionNotes: '"ShowAll" method should be called after the declaration and addition of CGui Widgets to the scrolled window.'
      }
    ],
    enums: [
      {
        name: 'Policy',
        contents: [
          {
            name: 'AUTOMATIC',
            usedFor: 'Automatically shows the scroll bar when needed'
          },
          {
            name: 'ALWAYS',
            usedFor: 'Always shows the scroll bar'
          },
          {
            name: 'NEVER',
            usedFor: 'Never shows the scroll bar'
          }
        ]
      }
    ]
  },
  {
    title: 'Dialog',
    imagesrc: 'https://i.imgur.com/k2htNV5.png',
    imgw: '50px',
    imgh: '50px',
    description: 'A popup window',
    relations: [
      {
        name: 'Type',
        value: 'class'
      },
      {
        name: 'Inherit',
        value: 'widget'
      },
      {
        name: 'Abstract',
        value: 'No'
      }
    ],
    functions: [
      {
        returnType: '',
        functionSyntax: 'Dialog()',
      },
      {
        returnType: 'template <typename type> void',
        functionSyntax: ' Add()',
      },
      {
        returnType: 'template <typename type> void',
        functionSyntax: ' Remove()',
      },
      {
        returnType: 'void',
        functionSyntax: ' InternalWidth()',
      },
      {
        returnType: 'void',
        functionSyntax: ' DefaultSize()',
      },
      {
        returnType: 'void',
        functionSyntax: ' Resizable()',
      },
      {
        returnType: 'void',
        functionSyntax: ' CustomHeaderbar()',
      },
      {
        returnType: 'void',
        functionSyntax: ' ShowAll()'
      }
    ],
    descriptiveFunctions: [
      {
        returnType: '',
        functionSyntax: 'Dialog(Window &window, bool modal, const char *title)',
        functionDescription: 'Creates a new dialog with parent "window", "modal" and "title".',
        defaultValues: [
          {
            target: 'title',
            value: '" "'
          }
        ]
      },
      {
        returnType: 'template <typename type> void',
        functionSyntax: ' Add(type &widget)',
        functionDescription: 'Adds a widget to a dialog.',
        functionNotes: 'Dialog can hold only one widget at a time, and it should be from CGui Widgets only.'
      },
      {
        returnType: 'template <typename type> void',
        functionSyntax: ' Remove(type &widget)',
        functionDescription: 'Removes a widget from dialog.'
      },
      {
        returnType: 'void',
        functionSyntax: ' InternalWidth(unsigned int width)',
        functionDescription: 'Sets a padding in all directions inside the dialog window.'
      },
      {
        returnType: 'void',
        functionSyntax: ' DefaultSize(unsigned int xsize, unsigned int ysize)',
        functionDescription: 'Sets the default size for dialog window.'
      },
      {
        returnType: 'void',
        functionSyntax: ' Resizable(bool resizable)',
        functionDescription: 'Sets whether the dialog window is resizable or not.'
      },
      {
        returnType: 'void',
        functionSyntax: ' CustomHeaderbar(Headerbar &hb)',
        functionDescription: 'Sets the custom headerbar for dialog window.'
      },
      {
        returnType: 'void',
        functionSyntax: ' ShowAll()',
        functionDescription: 'Sets the childrens to be shown on dialog window.',
        functionNotes: '"ShowAll" method should be called after the declaration and addition of CGui Widgets to the dialog window.'
      }
    ]
  }
]