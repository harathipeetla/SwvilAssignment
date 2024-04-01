const Schedule = () => {
  const events = [
    {
      title: 'Meeting with suppliers from Kuta Bali',
      time: '14.00-15.00',
      location: 'Sunset Road, Kuta, Bali',
    },
    {
      title: 'Check operation at Giga Factory 1',
      time: '18.00-20.00',
      location: 'Central Jakarta',
    },
  ]

  const borderColors = ['#9BDD7C', '#6972C3']

  return (
    <div className="Today-schedule">
      <h2>Today's Schedule</h2>
      {events.map((event, index) => (
        <div
          key={index}
          style={{
            borderLeft: `5px solid ${
              borderColors[index % borderColors.length]
            }`,
            padding: '10px',
          }}
        >
          <h3>{event.title}</h3>
          <p>
            <strong>Time:</strong> {event.time}
          </p>
          <p>
            <strong>Location:</strong> {event.location}
          </p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Schedule
