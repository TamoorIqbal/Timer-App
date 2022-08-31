import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import TimerButton from "./TimerButton"

describe("TimerButton", () => {
  let container: ShallowWrapper;
  const clickFn = jest.fn();

  beforeEach(
    () =>
      (container = shallow(
        <TimerButton buttonAction={clickFn} buttonValue={""} />
      ))
  );

  it("should render a <div/>", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });

  it("button should call function", () => {
    expect(clickFn).toHaveBeenCalledTimes(0);

    container.find("div").simulate("click");

    expect(clickFn).toHaveBeenCalledTimes(1);
  });
});