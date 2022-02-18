<template>
     <div class="profile-page">
           <div class="profile-head">
               <div class="wrap">
                   <div class="wrap_float">
                       <div class="breadcrumbs">
                            <a href="#">Home</a> - <a href="#" class="current">Profile page</a>
                        </div>
                       <h1 class="title">My Profile</h1>
                       <div class="userpic-block">
                           <div class="userpic">
                               <img src="img/demo-bg.jpg" alt="">
                               <button class="remove"></button>
                           </div>
                           <div class="change">
                               <label for="change-userpic">Change your avatar</label>
                               <input type="file" id="change-userpic">
                           </div>
                           <div class="select-file">
                               <input type="file" id="file-userpic">
                               <label for="file-userpic"><span>Selected file</span></label>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div class="profile-body">
               <div class="wrap">
                   <div class="wrap_float">
                       <div class="data">
                           <div class="profile-part">
                               <h2 class="title">Personal data</h2>
                               <div class="fields">
                                    <div class="input_wrap">
                                        <input type="text" class="input" placeholder="First name *" value="Mike">
                                    </div>
                                    <div class="input_wrap">
                                        <input type="text" class="input" placeholder="Last name *" value="Nelson">
                                    </div>
                                    <div class="input_wrap">
                                        <input type="text" class="input" placeholder="Middle name (optional)">
                                    </div>
                                    <div class="input_wrap">
                                        <input type="email" class="input" placeholder="Email" value="digistrict@yandex.ru">
                                    </div>
                                    <div class="input_wrap">
                                        <input type="text" class="input" placeholder="Company name (optional)" value="helloDigi">
                                    </div>
                                    <div class="input_wrap">
                                        <input type="text" class="input" placeholder="Phone *">
                                    </div>
                                </div>
                           </div>
                           <div class="profile-part">
                               <h2 class="title">Delivery information</h2>
                               <div class="fields">
                                    <div class="input_wrap">
                                        <input type="text" class="input" placeholder="Country *" value="Russia">
                                    </div>
                                    <div class="input_wrap">
                                        <input type="text" class="input" placeholder="State / Country" value="Moscow">
                                    </div>
                                    <div class="input_wrap">
                                        <input type="text" class="input" placeholder="Town / City">
                                    </div>
                                    <div class="input_wrap">
                                        <input type="number" class="input" placeholder="Postcode / ZIP" value="202203">
                                    </div>
                                </div>
                           </div>
                           <div class="profile-part">
                               <h2 class="title">Change password</h2>
                               <div class="fields">
                                    <div class="input_wrap">
                                        <input type="password" class="input" placeholder="Enter current password">
                                    </div>
                                    <div class="input_wrap">
                                        <input type="password" class="input" placeholder="Enter new password">
                                    </div>
                                    <div class="input_wrap">
                                        <input type="password" class="input" placeholder="Confirm new password">
                                    </div>
                                </div>
                           </div>
                       </div>
                       <button class="btn submit-btn"><span>Save Setting</span></button>
                       <div class="log-out-link"><a href="#">Log out of your profile</a></div>
                   </div>
               </div>
           </div>
        </div>
</template>