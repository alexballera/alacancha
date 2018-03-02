'use strict'
import yo from 'yo-yo'

const Form = yo`
<form class="col s12">
  <div class="row">
    <div class="input-field col s12">
      <i class="material-icons prefix hide">account_circle</i>
      <input id="icon_prefix" type="text" class="validate">
      <label for="icon_prefix">Username</label>
    </div>
    <div class="input-field col s12">
      <i class="material-icons prefix hide">lock</i>
      <input id="icon_telephone" type="password" class="validate">
      <label for="icon_telephone">Password</label>
    </div>
    <div class="input-field col s12">
      <button type="submit" name="submit" class="waves-effect waves-light btn"></button>
    </div>
  </div>
</form>
`

export {Form}
