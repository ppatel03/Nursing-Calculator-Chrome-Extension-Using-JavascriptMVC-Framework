// JavaScript Document
{"id":12,"submenus_id":"infusion-time-iv-time",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"infusion-time","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Infusion Time"},{"crumb_id":"infusion-time-iv-time","crumb_class":"crumb-link","underline":"","crumb_name":"IV time(hrs)"}],
"form":[
{"input_label":"IV pump","input_type":"radio","name":"is-iv-pump","id":"infusion-time-iv-time-radio-iv-pump","class":"infusion-time-iv-time-inputs","input_value":"formulae_with_iv_pump","onclick":"document.getElementById('gtt-min').value='N/A';document.getElementById('iv-calibration').value='N/A';document.getElementById('gtt-min').disabled=true;document.getElementById('iv-calibration').disabled=true;document.getElementById('ml-hr').disabled=false;document.getElementById('ml-hr').value='';"},
{"input_label":"No IV pump","input_type":"radio","name":"is-iv-pump","id":"infusion-time-iv-time-radio-without-iv-pump","class":"infusion-time-iv-time-inputs","input_value":"formulae_without_iv_pump","onclick":"document.getElementById('gtt-min').disabled=false;document.getElementById('iv-calibration').disabled=false;document.getElementById('gtt-min').value='';document.getElementById('iv-calibration').value='';document.getElementById('ml-hr').value='N/A';document.getElementById('ml-hr').disabled=true;"},
{"input_label":"enter volume : ","input_type":"text","id":"volume","class":"infusion-time-iv-time-inputs operand","input_value":""},
{"input_label":"enter mL/hr : ","input_type":"text","id":"ml-hr","class":"infusion-time-iv-time-inputs operand","input_value":""},
{"input_label":"enter gtts/min : ","input_type":"text","id":"gtt-min","class":"infusion-time-iv-time-inputs operand","input_value":""},
{"input_label":"enter iv calibration : ","input_type":"text","id":"iv-calibration","class":"infusion-time-iv-time-inputs operand","input_value":""},
{"input_label":"Hours and Minutes :","input_type":"button","id":"solve-button","class":"infusion-time-iv-time-inputs","input_value":"Calculate"
}],
"formulae_with_iv_pump":[{"formula":"Math.floor((volume)/(ml-hr))","unit":"Hours"},{"formula":"Math.round((((volume)/(ml-hr))-Math.floor((volume)/(ml-hr)))*60)","unit":"Minutes"}],
"formulae_without_iv_pump":[{"formula":"Math.floor((volume)/(gtt-min*60/iv-calibration))","unit":"Hours"},{"formula":"Math.round((((volume)/(gtt-min*60/iv-calibration))-Math.floor((volume)/(gtt-min*60/iv-calibration)))*60)","unit":"Minutes"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p align='center'>Basic Time</p><div align='center'><center><table cellspacing='0' cellpadding='5' border='0'><tbody><tr><td align='center'><font><u>Volume<br></u>Rate</font></td><td><font >= Hours</font></td></tr></tbody></table></center></div><p align='center'>Time Calculated Using IV Tubing Only</p><div align='center'><center><table cellspacing='0' cellpadding='5' border='0'><tbody><tr><td align='center'><font>Volume<font size='4'>/</font></font></td><td align='center'><font size='6' >(</font></td><td align='center'><font ><u>&nbsp;&nbsp; gtt/min&nbsp;<br></u>Calibration</font></td><td align='center'><font >x60</font></td><td><font size='6' >)</font></td><td><font>= Hours</font></td></tr></tbody></table></center></div></div>"
}


<%         
           if(this[i++]['input_type']=="select")
           {   
                i++;
           %>
           <select id="<%=this[i]['id']%>" class="<%=this[i]['class']%>">
           <%
           for(var j=0;j<this[i]['options'].length;j++)
           {           
           %>
           <option value="<%=this[i]['options'][j]['option_value']%>"><%=this[i]['options'][j]['option_name']%></option>
           <%}%>
           </select>
           <%
           }%>
