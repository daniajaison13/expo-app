import shutil
from builtins import range, len, str, open
from datetime import datetime
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect,JsonResponse
from django.urls import reverse
from datetime import datetime, timedelta
from dateutil import tz, parser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from rest_framework.reverse import reverse
from ExpoSubApp.auth_helper import get_sign_in_flow, get_token_from_code
from ExpoSubApp.graph_helper import *
from ExpoSubApp.graph_helper import get_user,get_photo

from ExpoSubApp.auth_helper import store_user

from ExpoSubApp.auth_helper import remove_user_and_token

from ExpoSubApp.auth_helper import get_token

from django.shortcuts import redirect

from ExpoSubApp.models import *
from .serializers import Expo_users_serializers, list_feedback_serializer
from django.conf import settings
from django.db.models import Avg,Count,Min,Max,Sum,Q
from django.shortcuts import get_object_or_404


import json
import base64
import datetime as dt

# Render Home page if authenticated successfully

def countdown(request):
    if 'user' in request.session:
        context = initialize_context(request)
        if getCountdown():
            return render(request, 'ExpoSub/expolobby.html', context)
        else:
            return render(request, 'ExpoSub/countdown.html',context)
    else:
        return redirect(sign_in)


def home(request):
    if 'user' in request.session:
        # print(request.session['user']['is_authenticated'])
        context = initialize_context(request)
        if getCountdown():
            
            return render(request, 'ExpoSub/expolobby.html', context)
        else:
            return render(request, 'ExpoSub/countdown.html',context)
    else:
        return redirect(sign_in)

def expomap(request):
    if 'user' in request.session:
        # print(request.session['user']['is_authenticated'])
        context = initialize_context(request)
        if getCountdown():
            user_id = context['user']['user_id']
            return render(request, 'ExpoSub/mapview.html', context)
        else:
            return render(request, 'ExpoSub/countdown.html',context)
    else:
        return redirect(sign_in)

def navbar(request):
    if 'user' in request.session:
        # print(request.session['user']['is_authenticated'])
        context = initialize_context(request)
        if getCountdown():
            user_id = context['user']['user_id']
            return render(request, 'ExpoSub/navbar.html', context)
        else:
            return render(request, 'ExpoSub/countdown.html',context)
    else:
        return redirect(sign_in)

def kiosk_navbar(request):
    if 'user' in request.session:
        # print(request.session['user']['is_authenticated'])
        context = initialize_context(request)
        if getCountdown():
            user_id = context['user']['user_id']
            return render(request, 'ExpoSub/kiosk_navbar.html', context)
        else:
            return render(request, 'ExpoSub/countdown.html',context)
    else:
        return redirect(sign_in)        

def kckiosk(request):
    if 'user' in request.session:
        # print(request.session['user']['is_authenticated'])
        context = initialize_context(request)
        if getCountdown():
            kiosk_room = Expo_Kiosk_rooms.objects.get(Kiosk_room_name = 'kckiosk')
            quiz = Expo_Quizes.objects.filter(kiosk_room=kiosk_room).exists()
            
            context['kiosk_room'] = 'kckiosk'
            if quiz:
                quiz_id = Expo_Quizes.objects.get(kiosk_room=kiosk_room).id
                context['quiz_id'] = quiz_id
            else:
                context['quiz_id'] = 0
            return render(request, 'ExpoSub/IE_kc.html', context)
        else:
            return render(request, 'ExpoSub/countdown.html',context)
    else:
        return redirect(sign_in)

def merryGoRound(request):
    if 'user' in request.session:
        context = initialize_context(request)
        if getCountdown():
            return render(request, 'ExpoSub/merryGoRound.html',context)
        else:
            return render(request, 'ExpoSub/countdown.html',context)
    else:
        return redirect(sign_in)

def waveSwinger(request):
    if 'user' in request.session:
        context = initialize_context(request)
        if getCountdown():
            
            return render(request, 'ExpoSub/waveSwinger.html', context)
        else:
            return render(request, 'ExpoSub/countdown.html',context)
    else:
        return redirect(sign_in)

def shootingGame(request):
    if 'user' in request.session:
        context = initialize_context(request)
        if getCountdown():
            return render(request, 'ExpoSub/shootingGame.html', context)
        else:
            return render(request, 'ExpoSub/countdown.html',context)
    else:
        return redirect(sign_in)

def rollercoaster(request):
    if 'user' in request.session:
        context = initialize_context(request)
        if getCountdown():
            return render(request, 'ExpoSub/rollercoaster.html',context)
        else:
            return render(request, 'ExpoSub/countdown.html',context)
    else:
        return redirect(sign_in)

def magicShow(request):
    if 'user' in request.session:
        context = initialize_context(request)
        if getCountdown():
            return render(request, 'ExpoSub/magicShow.html', context)
        else:
             return render(request, 'ExpoSub/countdown.html',context)
    else:
        return redirect(sign_in)

def columbusRide(request):
    if 'user' in request.session:
        context = initialize_context(request)
        if getCountdown():
            return render(request, 'ExpoSub/columbusRide.html', context)
        else:
            return render(request, 'ExpoSub/countdown.html',context)
    else:
        return redirect(sign_in)

def wonderland(request):
    if 'user' in request.session:
        context = initialize_context(request)
        if getCountdown():
            return render(request, 'ExpoSub/wonderland.html', context)
        else:
            return render(request, 'ExpoSub/countdown.html',context)
    else:
        return redirect(sign_in)

def giantWheel (request):
    if 'user' in request.session:
        context = initialize_context(request)
        if getCountdown():
            return render(request, 'ExpoSub/giantWheel.html', context)
        else:
            return render(request, 'ExpoSub/countdown.html',context)
    else:
        return redirect(sign_in)

def magicRide (request):
    if 'user' in request.session:
        context = initialize_context(request)
        if getCountdown():  
            return render(request, 'ExpoSub/magicRide.html', context)
        else:
            return render(request, 'ExpoSub/countdown.html',context)
    else:
        return redirect(sign_in)

def dropZone (request):
    if 'user' in request.session:
        context = initialize_context(request)
        if getCountdown():
            return render(request, 'ExpoSub/dropZone.html', context)
        else:
            return render(request, 'ExpoSub/countdown.html',context)
    else:
        return redirect(sign_in)
        
def Browserblocking (request):
    if 'user' in request.session:
        context = initialize_context(request)
        if getCountdown():
            return render(request, 'ExpoSub/browserblocking.html', context)
        else: 
            return render(request, 'ExpoSub/countdown.html',context)
    else:
        return redirect(sign_in)

def mvkiosk(request):
    if 'user' in request.session:
        # print(request.session['user']['is_authenticated'])
        context = initialize_context(request)
        if getCountdown():
            kiosk_room = Expo_Kiosk_rooms.objects.get(Kiosk_room_name = 'mvkiosk')
            quiz = Expo_Quizes.objects.filter(kiosk_room=kiosk_room).exists()
            context['kiosk_room'] = 'mvkiosk'
            if quiz:
                quiz_id = Expo_Quizes.objects.get(kiosk_room=kiosk_room).id
                context['quiz_id'] = quiz_id
            else:
                context['quiz_id'] = 0
            return render(request, 'ExpoSub/IE_mv.html', context)
        else:
            return render(request, 'ExpoSub/countdown.html',context)
    else:
        return redirect(sign_in)

def solgallery(request):
    if 'user' in request.session:
        # print(request.session['user']['is_authenticated'])
        context = initialize_context(request)
        if getCountdown():
            return render(request, 'ExpoSub/solutiongallery.html', context)
        else:
            return render(request, 'ExpoSub/countdown.html',context)
    else:
        return redirect(sign_in)

def whiteboard(request):
    context = initialize_context(request)
    if getCountdown():
        return render(request,'ExpoSub/whiteboard.html',context)
    else:
        return render(request, 'ExpoSub/countdown.html',context)

# def ticketInfo(request):
#     return render(request,'ExpoSub/ticketInfo.html')

# Session
def initialize_context(request):
    context = {}

    # Check for any errors in the session
    error = request.session.pop('flash_error', None)

    if error is not None:
        context['errors'] = []
        context['errors'].append(error)

    # Check for user in the session
    context['user'] = request.session.get('user', {'is_authenticated': False})
    return context


# Base method to login redirection
def sign_in(request):
    # Get the sign-in flow
    flow = get_sign_in_flow()
    # Save the expected flow so we can use it in the callback
    request.session['auth_flow'] = flow
    # Redirect to the Azure sign-in page
    return HttpResponseRedirect(flow['auth_uri'])


# method to redirect to the home page if the user is authenticated
def callback(request):
    # Make the token request
    result = get_token_from_code(request)
    print(result['access_token'])

    # Get the user's profile
    user = get_user(result['access_token'])

    #Get the user's DL_List
    usermember = get_memberof(result['access_token'])
    #print(usermember['value'][0]['displayName'])
    dl_list = []
    for word in usermember['value']:
        lis = word['displayName']
        count = lis.find("DL")
        if count >= 0:
            dl_list.append(lis)
            
    print(dl_list)

    #store user photo
    User_photo = get_user_profile_picture(request,result['access_token'])

    # Store user
    store_user(request, user,User_photo, dl_list)

    # store the user data to the database
    store_to_db(request,User_photo,result['access_token'])
    #store user session to db
    store_user_session(request,result['access_token'])
    return HttpResponseRedirect(reverse('countdown'))



#Function to store  the user data to database
def store_to_db(request,User_photo,access_token):
    today = dt.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    Users = request.session['user']
    user_id = Users['userPrincipalName'].split("@")[0]
    if  Expo_Users.objects.filter(User_id=user_id).exists():
        Expo_Users.objects.filter(User_id=user_id).update(User_id=user_id,First_name=Users['First_name'],Last_name=Users['last_name'],
                                  Org_name=Users['companyName'],Department=Users['department'],Job_title=Users['jobTitle'],
                                  Email=Users['email'],TimeZone=Users['timeZone'],Avatar =User_photo,created_at=today,updated_at=today)
    else:
        Users_Store = Expo_Users.objects.create(User_id=user_id,First_name=Users['First_name'],Last_name=Users['last_name'],
                                  Org_name=Users['companyName'],Department=Users['department'],Job_title=Users['jobTitle'],
                                  Email=Users['email'],TimeZone=Users['timeZone'],Avatar =User_photo,created_at=today,updated_at=today)
        Users_Store.save()

#Store user session
def store_user_session(request,access_token):
    today = dt.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    user_data = Expo_Users.objects.get(User_id=request.session['user']['user_id'])
    User_session_tb = Expo_User_Session()
    User_session_tb.Token = access_token
    User_session_tb.created_at = today
    User_session_tb.updated_at = today
    User_session_tb.User_id = user_data
    User_session_tb.save()


#get user profile picture from api
def get_user_profile_picture(request,access_token):
    get_user_photo = get_photo(access_token)
    EnImage = base64.b64encode(get_user_photo.content).decode()
    return EnImage

#Rest api to the users data from database
@api_view(['GET'])
def get(request):
    if request.method == 'GET':
        data = {}
        report_type = request.query_params.get('report_type',None)
        serializer = 0
        try:
            if report_type == 'listfeedback':
                serializer = list_feedback(request)
                return Response(serializer.data,status=200)
            if report_type == 'getusers':
                serializer = get_users_db(request)
                return Response(serializer.data,status=200)                             
        except Expo_Whiteboards.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)   
        return Response(data,status=200)    

def list_feedback(request):
    temp=request.GET
    data = Expo_Whiteboards.objects.all()
    return list_feedback_serializer(data,many=True)

def get_users_db(request):
    print(request.session['user']['user_id'])
    try:
        data = Expo_Users.objects.filter(User_id=request.session['user']['user_id'])
        serialize_data = Expo_users_serializers(data, many=True)
    except  Expo_Users.DoesNotExist:
        print("Not Found")
    return Response(serialize_data.data,status=200)

# Sign out method and clearing out the session
def sign_out(request):
    # Clear out the user and token
    remove_user_and_token(request)

    return HttpResponseRedirect(reverse('home'))


# <CalendarViewSnippet>
def calendar(request):
    context = initialize_context(request)
    user = context['user']

    # Load the user's time zone
    # Microsoft Graph can return the user's time zone as either
    # a Windows time zone name or an IANA time zone identifier
    # Python datetime requires IANA, so convert Windows to IANA
    time_zone = get_iana_from_windows(user['timeZone'])
    tz_info = tz.gettz(time_zone)

    # Get midnight today in user's time zone
    today = datetime.now(tz_info).replace(
        hour=0,
        minute=0,
        second=0,
        microsecond=0)

    # Based on today, get the start of the week (Sunday)
    if (today.weekday() != 6):
        start = today - timedelta(days=today.isoweekday())
    else:
        start = today

    end = start + timedelta(days=7)

    token = get_token(request)

    events = get_calendar_events(
        token,
        start.isoformat(timespec='seconds'),
        end.isoformat(timespec='seconds'),
        user['timeZone'])

    if events:
        # Convert the ISO 8601 date times to a datetime object
        # This allows the Django template to format the value nicely
        for event in events['value']:
            event['start']['dateTime'] = parser.parse(event['start']['dateTime'])
            event['end']['dateTime'] = parser.parse(event['end']['dateTime'])

        context['events'] = events['value']

    return render(request, 'ExpoSub/calendar.html', context)


# </CalendarViewSnippet>

@api_view(['POST'])
def post(request):
    if request.method == 'POST':
        data = {}
        report_type = request.query_params.get('report_type',None)
        serializer = 0
        try:
            if report_type == 'submitfeedback':
                serializer = submit_feedback(request)
                return Response(serializer,status=status.HTTP_201_CREATED)         
        except Expo_Whiteboards.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(data, status=200)

# <NewEventViewSnippet>
def newevent(request):
    context = initialize_context(request)
    user = context['user']
    if request.method == 'POST':
        # Validate the form values
        # Required values
        if (not request.POST['ev-subject']) or \
                (not request.POST['ev-start']) or \
                (not request.POST['ev-end']):
            context['errors'] = [
                {'message': 'Invalid values', 'debug': 'The subject, start, and end fields are required.'}
            ]
            return render(request, 'ExpoSub/newevent.html', context)

        attendees = None
        if request.POST['ev-attendees']:
            attendees = request.POST['ev-attendees'].split(';')
        body = request.POST['ev-body']

        # Create the event
        token = get_token(request)

        create_event(
            token,
            request.POST['ev-subject'],
            request.POST['ev-start'],
            request.POST['ev-end'],
            attendees,
            request.POST['ev-body'],
            user['timeZone'])

        # Redirect back to calendar view
        return HttpResponseRedirect(reverse('calendar'))
    else:
        # Render the form
        return render(request, 'ExpoSub/newevent.html', context)
    
    	
def submit_feedback(request):	
    data = (request.data) 	
    #print("hello test",data.get("feedback"))	
    #print(request.session['user'])	
    user = request.session['user']	
    usermember = user['dl_list']	
    newfeedback= Expo_Whiteboards()	
    newfeedback.User_id = Expo_Users.objects.get(User_id=user['user_id'])	
    newfeedback.Feedback = data["feedback"]	
    newfeedback.Timestamp = dt.datetime.now()	
    newfeedback.assoc_name = user['First_name']+' '+user['last_name']	
    newfeedback.assoc_org = user['companyName'].rsplit(" - ")[0]	
    userimage = Expo_Users.objects.get(User_id=user['user_id'])	
    newfeedback.avatar = userimage.Avatar 	
    dllist=["DL_CTS_Enterprise_Services", "DL_GLOBAL_BUS_CNTR_INDIA_MANYATA_C2_FLOOR_7", "DL_CTS_ES_BUSINESS_SERVICES"]        	
    if dllist in usermember:	
        newfeedback.is_exec = True	
        temp = Expo_Whiteboards.objects.all().aggregate(Min("order"))	
        print(temp)	
        if temp['order__min']:	
            newfeedback.order = temp['order__min']-1	
        else:	
            newfeedback.order = -1    	
    else:	
        newfeedback.order = 0    	
    newfeedback.save()	
    return True

# def chat_page(request, slug):
#     context = initialize_context(request)
#     if context['user']['is_authenticated']:
#         chat = Expo_Kiosk_Chat_rooms.objects.get(Chat_room_slug=slug)
#         context['team_id'] = chat.Team_id
#         context['channel_id'] = chat.Channel_id
#         return render(request, 'ExpoSub/chat_page.html', context)
#     else:
#         return HttpResponseRedirect(reverse('home'))

# </NewEventViewSnippet>

def submit_kioskFeedback(request):
    data = (request.data) 
    user = request.session['user']
    newfeedback= Expo_Whiteboards()
    newfeedback.User_id = Expo_Users.objects.get(User_id=user['user_id'])
    newfeedback.Feedback = data["feedback"]
    newfeedback.Timestamp = dt.datetime.now()
    newfeedback.assoc_name = user['First_name']+' '+user['last_name']
    userimage = Expo_Users.objects.get(User_id=user['user_id'])
    newfeedback.avatar = userimage.Avatar
    newfeedback.save() 
    return True

def take_quiz(request, name):
    kiosk_room = get_object_or_404(Expo_Kiosk_rooms, Kiosk_room_name=name)
    quiz = Expo_Quizes.objects.filter(kiosk_room=kiosk_room).exists()
  
    if 'user' in request.session:
        context = initialize_context(request)
        context['kiosk_room'] = name

        if name == 'columbusRide':
          context['kiosk_room_name'] = 'The Ringmaster Show'
        elif name == 'merryGoRound':
          context['kiosk_room_name'] = 'Merry Go Round'
        elif name == 'shootingGame':
          context['kiosk_room_name'] = 'Shooting Game'
        elif name == 'giantWheel':
          context['kiosk_room_name'] = 'Giant Wheel'
        elif name == 'wonderland':
          context['kiosk_room_name'] = 'Wonderland'
        elif name == 'magicShow':
          context['kiosk_room_name'] = 'Magic Show'
        elif name == 'rollercoaster':
          context['kiosk_room_name'] = 'Rollercoaster'
        elif name == 'waveSwinger':
          context['kiosk_room_name'] = 'Wave Swinger'
        elif name == 'dropZone':
          context['kiosk_room_name'] = 'Drop Zone'
        else:
          context['kiosk_room_name'] = name

        if quiz:
          quiz_id = Expo_Quizes.objects.get(kiosk_room=kiosk_room).id
          context['quiz_id'] = quiz_id
        else:
          return render(request, 'ExpoSub/no_quiz.html', context)

        user_id = context['user']['user_id']
        user = Expo_Users.objects.get(User_id=user_id)

        present_quiz = Expo_Quizes.objects.get(kiosk_room=kiosk_room)

        quiz_questions = Expo_questions.objects.filter(quiz__id=present_quiz.id).exists()
        if not quiz_questions:
          return render(request, 'ExpoSub/no_quiz_questions.html', context)

        user_quiz = Expo_user_answer.objects.filter(quiz__id=quiz_id, user__id=user.id).exists()
        if user_quiz:
            return render(request, 'ExpoSub/quiz_taken.html', context)
        else:
            return render(request, 'ExpoSub/quiz.html', context)
    else:
        return redirect(sign_in)

def submit_feedback(request):	
    data = (request.data) 	
    #print("hello test",data.get("feedback"))	
    #print(request.session['user'])	
    user = request.session['user']	
    usermember = user['dl_list']
    newfeedback= Expo_Whiteboards()	
    newfeedback.User_id = Expo_Users.objects.get(User_id=user['user_id'])	
    newfeedback.Feedback = data["feedback"]	
    newfeedback.Timestamp = dt.datetime.now()	
    newfeedback.assoc_name = user['First_name']+' '+user['last_name']	
    newfeedback.assoc_org = user['companyName']	
    userimage = Expo_Users.objects.get(User_id=user['user_id'])	
    newfeedback.avatar = userimage.Avatar 	
    dllist=['DL_ALL_EXECUTIVES', 'DL_ALL_EXECUTIVES_WITH_SPAN','DL_INDIA_EXECS']
    FlagDL = ValidateDL(dllist,usermember)
    if FlagDL == True :	
        temp = Expo_Whiteboards.objects.all().aggregate(Min("order"))	
        if temp['order__min']:	
            newfeedback.order = temp['order__min']-1	
        else:	
            newfeedback.order = -1    	
    else:	
        newfeedback.order = 0    	
    newfeedback.save()	
    return True

def ValidateDL(dllist,usermember):
    Flag = False
    for DL in usermember:
        if DL.upper() in dllist:
            Flag = True

    return Flag

def getCountdown():
    deadlineArr=Expo_CounDownTimeDate.objects.values('deadLineTime')
    deadlineDict=deadlineArr[0]
    deadlineTimeRawStr=deadlineDict['deadLineTime']
    deadlinetimeArr=deadlineTimeRawStr.split()
    deadlineTimeDate=deadlinetimeArr[0]
    deadlineTime=deadlinetimeArr[1]
    date=deadlineTimeDate.split('-')
    year=date[0]
    month=date[1]
    day=date[2]
    time=deadlineTime.split(':')
    hour=time[0]
    min=time[1]
    sec=time[2]
    currTime=dt.datetime.utcnow()
    deadlineTime=dt.datetime(int(year),int(month),int(day),int(hour),int(min),int(sec))
    if currTime<deadlineTime:
        return False  
    else:
        return True

def about(request):
    if 'user' in request.session:
        context = initialize_context(request)
        return render(request,'ExpoSub/contributors.html',context)
    else:
        return redirect(sign_in)
