import { Component } from '@angular/core';
@Component({
    selector: 'chat',
    template: `
        <div class="small-chat-box fadeInRight animated">

            <div class="heading" draggable="true">
                <small class="chat-date pull-right">
                    02.19.2015
                </small>
                Small chat
            </div>

            <div class="content">

                <div class="left">
                    <div class="author-name">
                        Monica Jackson <small class="chat-date">
                        10:02 am
                    </small>
                    </div>
                    <div class="chat-message active">
                        Lorem Ipsum is simply dummy text input.
                    </div>

                </div>
                <div class="right">
                    <div class="author-name">
                        Mick Smith
                        <small class="chat-date">
                            11:24 am
                        </small>
                    </div>
                    <div class="chat-message">
                        Lorem Ipsum is simpl.
                    </div>
                </div>
                <div class="left">
                    <div class="author-name">
                        Alice Novak
                        <small class="chat-date">
                            08:45 pm
                        </small>
                    </div>
                    <div class="chat-message active">
                        Check this stock char.
                    </div>
                </div>
                <div class="right">
                    <div class="author-name">
                        Anna Lamson
                        <small class="chat-date">
                            11:24 am
                        </small>
                    </div>
                    <div class="chat-message">
                        The standard chunk of Lorem Ipsum
                    </div>
                </div>
                <div class="left">
                    <div class="author-name">
                        Mick Lane
                        <small class="chat-date">
                            08:45 pm
                        </small>
                    </div>
                    <div class="chat-message active">
                        I belive that. Lorem Ipsum is simply dummy text.
                    </div>
                </div>


            </div>
            <div class="form-chat">
                <div class="input-group input-group-sm">
                    <input type="text" class="form-control">
                    <span class="input-group-btn"> <button
                        class="btn btn-primary" type="button">Send
                </button> </span></div>
            </div>

        </div>
        <div id="small-chat">

            <span class="badge badge-warning pull-right">5</span>
            <a class="open-small-chat">
                <i class="fa fa-comments"></i>

            </a>
        </div>
  `,

    styles: [`
#small-chat {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
}
#small-chat .badge {
  position: absolute;
  top: -3px;
  right: -4px;
}
.open-small-chat {
  height: 38px;
  width: 38px;
  display: block;
  background: #1ab394;
  padding: 9px 8px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
}
.open-small-chat:hover {
  color: white;
  background: #1ab394;
}
.small-chat-box {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 75px;
  background: #fff;
  border: 1px solid #e7eaec;
  width: 230px;
  height: 320px;
  border-radius: 4px;
}
.small-chat-box.ng-small-chat {
  display: block;
}
.body-small .small-chat-box {
  bottom: 70px;
  right: 20px;
}
.small-chat-box.active {
  display: block;
}
.small-chat-box .heading {
  background: #2f4050;
  padding: 8px 15px;
  font-weight: bold;
  color: #fff;
}
.small-chat-box .chat-date {
  opacity: 0.6;
  font-size: 10px;
  font-weight: normal;
}
.small-chat-box .content {
  padding: 15px 15px;
}
.small-chat-box .content .author-name {
  font-weight: bold;
  margin-bottom: 3px;
  font-size: 11px;
}
.small-chat-box .content > div {
  padding-bottom: 20px;
}
.small-chat-box .content .chat-message {
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 11px;
  line-height: 14px;
  max-width: 80%;
  background: #f3f3f4;
  margin-bottom: 10px;
}
.small-chat-box .content .chat-message.active {
  background: #1ab394;
  color: #fff;
}
.small-chat-box .content .left {
  text-align: left;
  clear: both;
}
.small-chat-box .content .left .chat-message {
  float: left;
}
.small-chat-box .content .right {
  text-align: right;
  clear: both;
}
.small-chat-box .content .right .chat-message {
  float: right;
}
.small-chat-box .form-chat {
  padding: 10px 10px;
}
  `],
})

export class ChatComponent {

}