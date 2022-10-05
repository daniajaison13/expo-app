function markKisokVisited(user_id, kiosk_name) {
    $.post(`${HostURL}/api/v1/visit_kiosk`,
        {
            'user_id': user_id,
            'kiosk_room': kiosk_name,
        },
        function (data, status, xhr) {
        }).done(function () {
        }).fail(function (jqxhr, settings, ex) {
        })
}