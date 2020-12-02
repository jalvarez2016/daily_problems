const superstars = [
    {
      name: "Russell Westbrook",
      team: "Houston Rockets",
      number: 0,
      points_per_game: 27.5,
      assists_per_game: 11.2,
      rebounds_per_game: 10.2,
    },
    {
      name: "LeBron James",
      team: "Los Angeles Lakers",
      number: 23,
      points_per_game: 28.5,
      assists_per_game: 10.2,
      rebounds_per_game: 8.2,
    },
    {
      name: "James Harden",
      team: "Houston Rockets",
      number: 13,
      points_per_game: 32.5,
      assists_per_game: 5.2,
      rebounds_per_game: 3.8,
    },
    {
      name: "Kevin Durant",
      team: "Golden State Warriors",
      number: 0,
      points_per_game: 28.5,
      assists_per_game: 6.0,
      rebounds_per_game: 7.2,
    },
    {
      name: "Luka Doncic",
      team: "Dallas Mavericks",
      number: 77,
      points_per_game: 19.5,
      assists_per_game: 10.9,
      rebounds_per_game: 10.2,
    },
    {
      name: "Bam Adebayo",
      team: "Miami Heat",
      number: 13,
      points_per_game: 16.9,
      assists_per_game: 4.2,
      rebounds_per_game: 12.2,
    },
  ];

  const highestScorer = (players) => {
    //return the player with the highest score
    let bestPlayer = players[0];
    players.forEach(player => {
        if(player.points_per_game > bestPlayer.points_per_game){
            bestPlayer = player;
        }
    });
    return bestPlayer.name;
  }

  function func() {
    return this;
  }

  let context = func();

  console.log(context);
  console.log(this);