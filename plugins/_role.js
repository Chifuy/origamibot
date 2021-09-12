let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 10) ? 'Beginner'
          : ((user.level >= 10) && (user.level <= 20)) ? 'Kittel Town'
          : ((user.level >= 20) && (user.level <= 30)) ? 'Black Woods'
          : ((user.level >= 30) && (user.level <= 40)) ? 'Farmount'
          : ((user.level >= 40) && (user.level <= 50)) ? 'Rosenvale'
          : ((user.level >= 50) && (user.level <= 60)) ? 'Amberhill'
          : ((user.level >= 60) && (user.level <= 70)) ? 'Epical Glory'
          : ((user.level >= 70) && (user.level <= 80)) ? 'Veteran I'
          : ((user.level >= 80) && (user.level <= 90)) ? 'Veteran II'
          : ((user.level >= 90) && (user.level <= 100)) ? 'Veteran III'
          : ((user.level >= 100) && (user.level <= 120)) ? 'Master Fap'
          : ((user.level >= 120) && (user.level <= 140)) ? 'Master Woods'
          : ((user.level >= 140) && (user.level <= 160)) ? 'Master Farm'
          : ((user.level >= 160) && (user.level <= 180)) ? 'Master Elite'
          : ((user.level >= 180) && (user.level <= 200)) ? 'Master Rose'
          : ((user.level >= 200) && (user.level <= 230)) ? 'Master Town'
          : ((user.level >= 230) && (user.level <= 260)) ? 'Master Troops'
          : ((user.level >= 260) && (user.level <= 290)) ? 'Master Wind'
          : ((user.level >= 290) && (user.level <= 330)) ? 'Master Darkness'
          : ((user.level >= 330) && (user.level <= 370)) ? 'Master TreasureDevil'
          : ((user.level >= 370) && (user.level <= 400)) ? 'Master Demon'
          : ((user.level >= 430) && (user.level <= 460)) ? 'Master Angel'
          : 'Master Legends'
  user.role = role
  return true
}

module.exports = handler