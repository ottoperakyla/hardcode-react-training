import React from "react";

const NeedsPerson = props => {
  const { children, person, ...rest } = props;

  if (!person) {
    return null;
  }

  return children({
    ...rest,
    person
  });
};

const PersonPage = props => {
  const { person } = props;
  return (
    <div>
      <NeedsPerson person={person}>
        {({ person }) => {
          return (
            <>
              <h2>
                {person.lastName}, {person.firstName}
              </h2>
              <p>Sad story here.</p>
            </>
          );
        }}
      </NeedsPerson>
    </div>
  );
};

export default PersonPage;
