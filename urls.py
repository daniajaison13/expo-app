from django.urls import path,re_path

from ExpoSubApp import views


urlpatterns = [
  
  path('countdown', views.countdown, name='countdown'),
  path('home', views.home, name='home'),
  path('', views.sign_in, name='signin'),
  path('getusers/', views.get_users_db, name='getusers'),
  path('callback', views.callback, name='callback'),
  path('signout', views.sign_out, name='signout'),
  path('calendar', views.calendar, name='calendar'),
  path('whiteboard', views.whiteboard, name='whiteboard'),
  path('get/',views.get,name='get'),
  path('post/',views.post,name='post'),
  path('submitfeedback/',views.submit_feedback,name='submitfeedback'),
  path('listfeedback/',views.list_feedback,name='listfeedback'),
  path('expomap', views.expomap, name='expomap'),
  path('navbar', views.navbar, name='navbar'),
  path('kckiosk', views.kckiosk, name='kckiosk'),
  path('shootingGame', views.shootingGame, name='shootingGame'),
  path('rollercoaster', views.rollercoaster, name='rollercoaster'),
  path('magicShow', views.magicShow, name='magicShow'),
  path('columbusRide', views.columbusRide, name='columbusRide'),
  path('wonderland', views.wonderland, name='wonderland'),
  path('merryGoRound', views.merryGoRound, name='merryGoRound'),
  path('waveSwinger', views.waveSwinger, name='waveSwinger'),
  path('giantWheel', views.giantWheel, name='giantWheel'),
  path('magicRide', views.magicRide, name='magicRide'),
  path('dropZone', views.dropZone, name='dropZone'),
  path('mvkiosk', views.mvkiosk, name='mvkiosk'),
  path('kioskNavbar', views.kiosk_navbar, name="kiosk_navbar"),
  path('quiz/<str:name>', views.take_quiz, name='quiz'),
  path('solgallery', views.solgallery, name='solgallery'),
  # path('chats/<slug:slug>/', views.chat_page, name="chat_page"),
  path('about', views.about, name="about"),
  path('browserblocking',views.Browserblocking,name="browserblocking"),
]
