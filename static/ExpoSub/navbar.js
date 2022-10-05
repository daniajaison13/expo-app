$(document).ready(function () {
  $("#navbar-div").load("/navbar");
});

function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

// $('#leaderBoardModal').on('hidden.bs.modal', function () {
//   $("#rank-table tr").remove();
// });

function openLeaderBoard(user_id) {
  $("#rank-table tr").remove();
  $('#leaderBoardModal').modal('show');
  $.ajax({
    type: 'GET',
    url: `${HostURL}/api/v1/users_score`,
    async: true,
    beforeSend: function () {
      document.getElementById("loading-icon").style.display = "block";
    },
    success: function (rankList) {
      console.log("Done");
      current_user = rankList.filter(obj => {
        return obj.User_id === user_id
      })
      setCurrentUserRank(current_user[0]);

      filtered_user = rankList.filter(obj => {
        return obj.score > 0
      })
      var cmp = (a, b) => (a < b) - (a > b)
      var cmpName = (a, b) => (a > b) - (a < b)
      filtered_user.sort(function (a, b) {
        return cmp(a.score, b.score) || cmpName(a.First_name, b.First_name);
      });
      addToTable(filtered_user, user_id);
    },
    complete: function () {
      document.getElementById("loading-icon").style.display = "none";
    }
  });

}


function addToTable(filtered_user, user_id) {
  $("#rank-table tr").remove();

  var table = document.getElementById('rank-table');
  $.each(filtered_user, function (i, item) {

    var tr = document.createElement('tr');
    var td_rank = document.createElement('td');
    var td_profile_pic = document.createElement('td');
    var td_user_name = document.createElement('td');
    var td_score = document.createElement('td');

    var rank_text;
    let rank = i + 1;
    if (rank === 1) {
      var first_place_badge = document.createElement('img');
      first_place_badge.src = "/static/ExpoSub/LeaderBoardImages/1stplace.png";
      first_place_badge.width = "21";
      first_place_badge.height = "30";
      rank_text = first_place_badge;
    } else if (rank === 2) {
      var second_place_badge = document.createElement('img');
      second_place_badge.src = "/static/ExpoSub/LeaderBoardImages/2ndplace.png";
      second_place_badge.width = "20";
      second_place_badge.height = "30";
      rank_text = second_place_badge;
    } else if (rank === 3) {
      var third_place_badge = document.createElement('img');
      third_place_badge.src = "/static/ExpoSub/LeaderBoardImages/3rdplace.png";
      third_place_badge.width = "20";
      third_place_badge.height = "30";
      rank_text = third_place_badge;
    } else {
      rank_text = document.createTextNode(rank);
    }
    var profile_pic = document.createElement('img');
    if ("data:image/png;base64," + item.Avatar != undefined) {
      profile_pic.src = "data:image/png;base64," + item.Avatar;
    }else{
      profile_pic.src = "/static/ExpoSub/LeaderBoardImages/sampleprofilepic.png";
    }
    profile_pic.width = "35";
    profile_pic.height = "35";
    profile_pic.className = "avatar-img";
    var user_name = document.createTextNode(item.First_name + ' ' + item.Last_name);
    var score_value = document.createTextNode(item.score);

    td_rank.appendChild(rank_text);
    td_profile_pic.appendChild(profile_pic);
    td_user_name.appendChild(user_name);
    td_score.appendChild(score_value);
    tr.appendChild(td_rank);
    tr.appendChild(td_profile_pic);
    tr.appendChild(td_user_name);
    tr.appendChild(td_score);
    table.appendChild(tr);
    if (user_id === item.User_id) {
      document.getElementById('user-rank').innerHTML = i + 1;
    }
  });
}
function setCurrentUserRank(current_user) {
  document.getElementById('user-name-val').innerHTML = current_user.First_name + ' ' + current_user.Last_name;
  document.getElementById('user-avatar').src = "data:image/png;base64," + current_user.Avatar;
  document.getElementById('user-score').innerHTML = current_user.score;
  document.getElementById('user-rank').innerHTML = "0";
}