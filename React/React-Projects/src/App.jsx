// import Todo from "./01-Todo/Todo";
// import Meals from "./02-Meals-API/Meals";
// import Calculator from "./03-Calculator/Calculator";
// import ToggleBackgroundColor from "./04-ToggleBackgroundColor/ToggleBackgroundColor";
// import HiddenSearchBar from "./05-HiddenSearchBar/HiddenSearchBar";
// import Testimonials from "./06-Testimonials/Testimonials";

import Accordion from "./07-Accordions/Accordion";
import { accordionData } from "./07-Accordions/utils/content";

const App = () => {
  return (
    <div>
      {/* <Todo /> */}
      {/* <Meals /> */}
      {/* <Calculator /> */}
      {/* <ToggleBackgroundColor /> */}
      {/* <HiddenSearchBar /> */}
      {/* <Testimonials /> */}
      <div>
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;
