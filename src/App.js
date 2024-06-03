
import './App.css';
//import Todos from './Pages/Todos';
import Form from './Components/InputField.js';
import Button from './Components/Button';
import TodoContainer from './Components/TodoContainer.js';
import Shepherd from 'shepherd.js';
import './Components/shepherd.js/dist/css/shepherd.css';
import { useEffect } from 'react';

function App() {

    useEffect(() => {
      const tour = new Shepherd.Tour({
        useModalOverlay: true,
          defaultStepOptions: {
              classes: 'shepherd-theme-arrows',
              cancelIcon: {
                enabled: true
              },
          },
      });
  
      tour.addStep({
          id: 'step1',
          text: 'Welcome to My Todo App .',
          // attachTo: { element: 'body', on: 'top' },
          buttons: [
              {
                  text: 'Next',
                  action: tour.next,
              },
          ],
          //scrollTo: { behavior: 'smooth', block: 'top' }
  
      });
  
      tour.addStep({
          id: 'step2',
          text: 'You can Filter your Todo Notes based on Completed or Not.',
          attachTo: { element: '.dropdown', on: 'left' },
          buttons: [
              {
                  text: 'Next',
                  action: tour.next,
              },
          ],
      });

      tour.addStep({
        id: 'step3',
        text: 'Type Your Todo.',
        attachTo: { element: '.input-field', on: 'top' },
        buttons: [
          {
            text: 'Previous',
            action: tour.back,
            classes: 'shepherd-button-secondary'
          },
            {
                text: 'Next',
                action: tour.next,
            },
        ],
    });
    tour.addStep({
      id: 'step4',
      text: 'Click it to add Your New Todo 🙂.', 
      attachTo: { element: '.submit-button', on: 'right' },
      buttons: [
        {
          text: 'Previous',
          action: tour.back,
          classes: 'shepherd-button-secondary'
        },
          {
              text: 'Next',
              action: tour.next,
          },
      ],
  });

  tour.addStep({
    id: 'step5',
    text: 'Your Number of Todo.', 
    attachTo: { element: '.sr-no', on: 'left' },
    buttons: [
      {
        text: 'Previous',
        action: tour.back,
        classes: 'shepherd-button-secondary'
      },
        {
            text: 'Next',
            action: tour.next,
        },
    ],
});
    
tour.addStep({
  id: 'step6',
  text: 'Your Todo Work ', 
  attachTo: { element: '.main-text', on: 'left' },
  buttons: [
    {
      text: 'Previous',
      action: tour.back,
      classes: 'shepherd-button-secondary'
    },
      {
          text: 'Next',
          action: tour.next,
      },
  ],
});
tour.addStep({
  id: 'step7',
  text: 'The Date on which you Created ', 
  attachTo: { element: '.date-created', on: 'left' },
  buttons: [
    {
      text: 'Previous',
      action: tour.back,
      classes: 'shepherd-button-secondary'
    },
      {
          text: 'Next',
          action: tour.next,
      },
  ],
});
  
tour.addStep({
  id: 'step8',
  text: 'Click to make it Completed', 
  attachTo: { element: '.checkbox', on: 'top' },
  buttons: [
    {
      text: 'Previous',
      action: tour.back,
      classes: 'shepherd-button-secondary'
    },
      {
          text: 'Next',
          action: tour.next,
      },
  ],
});
tour.addStep({
  id: 'step9',
  text: 'Click on the Button to edit your Todo', 
  attachTo: { element: '.button', on: 'left' },
  buttons: [
    {
      text: 'Previous',
      action: tour.back,
      classes: 'shepherd-button-secondary'
    },
      {
          text: 'Next',
          action: tour.next,
      },
  ],
});

tour.addStep({
  id: 'step10',
  text: 'Click on the Button to edit and Second button to Delete your Todo', 
  attachTo: { element: '.button', on: 'left' },
  buttons: [
    
      {
          text: 'Finish',
          action: tour.next,
      },
  ],
});
tour.addStep({
  id: 'step11',
  text: 'Thats it Enjoy Your Day', 
  buttons: [
      {
          text: 'Finish',
          action: tour.complete,
      },
  ],
});
      tour.start();
  
      return () => {
          tour.complete();
      };
  }, []);
   

  return (
    
    <div>
      <TodoContainer />
    </div>
  );
}

export default App;
