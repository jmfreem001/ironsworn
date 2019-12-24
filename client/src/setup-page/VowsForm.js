import React, { useState } from 'react';

const MilestoneInput = ({ submit, changeHandler, vow }) => {
  return (
    <div>
      <label className="primary-label" htmlFor="milestoneText">
        Milestone
        <input
          type="text"
          onChange={changeHandler}
          data-testid="vowMilestonesInput"
          value={vow.milestoneText}
          name="milestoneText"
        />
      </label>
      {/* <input data-testid="vowMilestonesInput" type='text'> */}
      <button data-testid="vowMilestonesSubmit" onClick={submit}>
        Add Milestone
      </button>
    </div>
  );
};

const VowsForm = ({ onSend }) => {
  let initialState = {
    name: '',
    notes: '',
    rank: '',
    milestones: [],
    milestoneText: ''
  };
  let [vow, setVow] = useState(initialState);

  let changeHandler = e => {
    setVow({
      ...vow,
      [e.target.name]: e.target.value
    });
  };
  let submitHandler = e => {
    e.preventDefault();

    setVow(initialState);
    onSend(vow);
  };
  let milestoneSubmitHandler = e => {
    e.preventDefault();
    let newMilestones = vow.milestones.concat(vow.milestoneText);
    setVow({ ...vow, milestones: newMilestones, milestoneText: '' });
  };

  let ranks = ['troublesome', 'dangerous', 'formidable', 'extreme', 'epic'];
  let options = ranks.map(item => (
    <option key={item} value={item}>
      {item}
    </option>
  ));
  let milestones = vow.milestones.map(milestone => {
    return <li key={milestone}>{milestone}</li>;
  });
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <label className="primary-label" htmlFor="name">
          Vow
          <input
            type="text"
            onChange={changeHandler}
            data-testid="vowNameInput"
            value={vow.name}
            name="name"
          />
        </label>
        <label className="primary-label" htmlFor="notes">
          Notes
          <textarea
            onChange={changeHandler}
            data-testid="vowNotesInput"
            name="notes"
            value={vow.notes}
          ></textarea>
        </label>
        <label className="primary-label" htmlFor="rank">
          Rank
          <select
            onChange={changeHandler}
            data-testid="vowRankInput"
            name="rank"
            value={vow.rank}
          >
            {options}
          </select>
        </label>
        <MilestoneInput
          submit={milestoneSubmitHandler}
          vow={vow}
          changeHandler={changeHandler}
        />
        <ul data-testid="vowMilestonesList">{milestones}</ul>
        <input type="submit" data-testid="vowSubmitButton" value="Save Vow" />
      </form>
    </div>
  );
};

export default VowsForm;
