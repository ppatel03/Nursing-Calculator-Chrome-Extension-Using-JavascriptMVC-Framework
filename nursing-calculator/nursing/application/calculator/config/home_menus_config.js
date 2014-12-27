// JavaScript Document
var MENUS=[
	{ "id": 1, "name": "Dosage Calculators", "div_id": "dosage", "div_class": "blue_layout calc-tabs",
    "submenu":[{"id":1,"name":"IV Dosage","div_id":"iv-dosage","div_class":"blue_layout sub-calc-tabs"},
               {"id":2,"name":"PO Dosage-Solids","div_id":"po-dosage-solids","div_class":"orange_layout sub-calc-tabs"},
                {"id":3,"name":"PO Dosage-Liquids","div_id":"po-dosage-liquids","div_class":"green_layout sub-calc-tabs"}],
    "breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"
                             },
                    {"crumb_id":"dosage","crumb_class":"crumb-link","underline":"","crumb_name":"Dosage"
                             }]
    },
	{ "id": 2, "name": "IV Rates", "div_id": "iv-rates", "div_class": "blue_layout calc-tabs",
	"submenu":[{"id":1,"name":"IV Rate(gtt/min)","div_id":"iv-rate-gtt-min","div_class":"blue_layout sub-calc-tabs"},
               {"id":2,"name":"IV Rate(mL/hr)","div_id":"iv-rate-ml-hr","div_class":"blue_layout sub-calc-tabs"},
               {"id":3,"name":"Epinephrine Solutions to mg/mL","div_id":"mcg-min-ml-hr","div_class":"orange_layout sub-calc-tabs"},
               {"id":4,"name":"mcg/kg/min as mL/hr","div_id":"mcg-kg-min-ml-hr","div_class":"orange_layout sub-calc-tabs"}],
    "breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"
                             },
                    {"crumb_id":"iv-rates","crumb_class":"crumb-link","underline":"","crumb_name":"IV Rates"
                             }]
    },
	{ "id": 3, "name": "Clinical Calculators", "div_id": "clinical", "div_class": "orange_layout calc-tabs",
	"submenu":[{"id":1,"name":"Pediatric Dose Calculator","div_id":"pediatric-dose-calculator-clinical","div_class":"blue_layout sub-calc-tabs clinical"},
               {"id":2,"name":"O2 Remaining in E-cylinder","div_id":"o2-remaining-clinical","div_class":"blue_layout sub-calc-tabs clinical"},
               {"id":3,"name":"BSA Calculator","div_id":"bsa-calculator-clinical","div_class":"orange_layout sub-calc-tabs clinical"},
               {"id":4,"name":"Drug Absorption (Pka)","div_id":"drug-absorption-clinical","div_class":"orange_layout sub-calc-tabs clinical"},
               {"id":5,"name":"O.R. Fluid Requirements","div_id":"or-fluid-requirements-clinical","div_class":"green_layout sub-calc-tabs clinical"},
               {"id":6,"name":"N.P.O. Fluid Replacement","div_id":"npo-fluid-requirements-clinical","div_class":"green_layout sub-calc-tabs clinical"},
               {"id":7,"name":"Allowable Blood Loss","div_id":"allowable-blood-loss-clinical","div_class":"blue_layout sub-calc-tabs clinical"},
               {"id":8,"name":"Estimated Blood Volume ","div_id":"estimated-blood-volume-clinical","div_class":"blue_layout sub-calc-tabs clinical"},
               {"id":9,"name":"Ideal Body Weight (IBW)","div_id":"ideal-body-weight-clinical","div_class":"orange_layout sub-calc-tabs clinical"},
               {"id":10,"name":"Adjusted Body Weight (ABW)","div_id":"adjusted-body-weight-clinical","div_class":"orange_layout sub-calc-tabs clinical"},
               {"id":11,"name":"ABG Interpreter","div_id":"abg-interpreter-clinical","div_class":"green_layout sub-calc-tabs clinical"}],
	"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"
                             },
                    {"crumb_id":"clinical","crumb_class":"crumb-link","underline":"","crumb_name":"Clinical"
                             }]
    },
	{ "id": 4, "name": "Conversion", "div_id": "conversion", "div_class": "orange_layout calc-tabs",
	"submenu":[{"id":1,"name":"Fahrenheit,Celcius Conversions","div_id":"fahrenheit-celcius-conversions","div_class":"blue_layout sub-calc-tabs conversion"},
               {"id":2,"name":"Pounds to Kilograms","div_id":"pounds-to-kilograms-conversions","div_class":"blue_layout sub-calc-tabs conversion"},
               {"id":3,"name":"Inch to Centimeters","div_id":"inch-to-centimeters-conversions","div_class":"orange_layout sub-calc-tabs conversion"},
               {"id":4,"name":"Foot, Inch to Centimeters","div_id":"foot-inch-to-centimeters-conversions","div_class":"orange_layout sub-calc-tabs conversion"},
               {"id":5,"name":"Non-metric to Metric ","div_id":"non-metric-to-metric-conversions","div_class":"green_layout sub-calc-tabs conversion"},
               {"id":6,"name":"Metric Units ","div_id":"metric-units-conversions","div_class":"green_layout sub-calc-tabs conversion"},
               {"id":7,"name":"% Solutions to mg/mL","div_id":"percent-solutions-to-mg-mL-conversions","div_class":"blue_layout sub-calc-tabs conversion"},
               {"id":8,"name":"Epinephrine Solutions to mg/mL","div_id":"epinephrine-solutions-to-mg-mL-conversions","div_class":"blue_layout sub-calc-tabs conversion"}
    ],
    "breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"
                             },
                    {"crumb_id":"conversion","crumb_class":"crumb-link","underline":"","crumb_name":"Conversion"
                             }]
    },
	{ "id": 5, "name": "Infusion Time", "div_id": "infusion-time", "div_class": "green_layout calc-tabs",
	"submenu":[{"id":1,"name":"IV Time(hrs)","div_id":"infusion-time-iv-time","div_class":"blue_layout sub-calc-tabs"}],
    "breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"
                             },
                    {"crumb_id":"infusion-time","crumb_class":"crumb-link","underline":"","crumb_name":"Infusion Time"
                             }]
    },
	{ "id": 6, "name": "Drug", "div_id": "drug", "div_class": "green_layout calc-tabs",
	"submenu":[{"id":1,"name":"Propofol bolus/infusion","div_id":"propofol-bolus-infusion-drug","div_class":"blue_layout sub-calc-tabs"},
              {"id":2,"name":"Muscle Relaxants ","div_id":"muscle-relaxants-drug","div_class":"orange_layout sub-calc-tabs"}],
    "breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"
                             },
                    {"crumb_id":"drug","crumb_class":"crumb-link","underline":"","crumb_name":"Drug"
                             }]
    }
];

var FORMS=[
{"id":1,"submenus_id":"iv-dosage",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"dosage","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Dosage"},{"crumb_id":"iv-dosage","crumb_class":"crumb-link","underline":"","crumb_name":"IV Dosage"}],
"form":[{"input_label":"Dose Ordered : ","input_type":"text","name":"dose-ordered","id":"dose-ordered","class":"iv-dosage-inputs operand","input_value":"","tooltip":"prescribed dose or the ordered dose"},
{"input_label":"Dose Available : ","input_type":"text","name":"dose-available","id":"dose-available","class":"iv-dosage-inputs operand","input_value":"","tooltip":"available dose or stock dose"},
{"input_label":"Volume Available : ","input_type":"text","name":"volume-available","id":"volume-available","class":"iv-dosage-inputs operand","input_value":""},
{"input_label":"Infusion or 1x dose :","input_type":"button","name":"solve-button","id":"solve-button","class":"iv-dosage-inputs","input_value":"Calculate"
}],
"formulae":[{"formula":"((dose-ordered/dose-available)*volume-available)","unit":"units"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><table cellspacing='0' cellpadding='3' border='0'><tbody><tr><td><p align='center'><font  color='#FFFFFF'><u>&nbsp;dose ordered&nbsp;<br></u>dose available</font></p></td><td><font  color='#FFFFFF'>x volume available</font></td></tr></tbody></table></div>"
},
{"id":2,"submenus_id":"po-dosage-solids",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"dosage","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Dosage"},{"crumb_id":"po-dosage-solids","crumb_class":"crumb-link","underline":"","crumb_name":"PO Dosage-Solids"}],
"form":[{"input_label":"Dose Ordered : ","input_type":"text","name":"dose-ordered","id":"dose-ordered","class":"iv-dosage-inputs operand","input_value":"","tooltip":"prescribed dose or the ordered dose"},
{"input_label":"Dose Available : ","input_type":"text","name":"dose-available","id":"dose-available","class":"iv-dosage-inputs operand","input_value":"","tooltip":"available dose or stock dose"},
{"input_label":"Solution :","input_type":"button","name":"solve-button","id":"solve-button","class":"po-dosage-solids-inputs","input_value":"Calculate","tooltip":"Quantity(Q) is 1"
}],
"formulae":[{"formula":"(dose-ordered/dose-available)","unit":"units"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><table cellspacing='0' cellpadding='3' border='0'><tbody><tr><td><p align='center'><font  color='#FFFFFF'><u>&nbsp;dose ordered&nbsp;<br></u>dose available</font></p></td></tr></tbody></table></div>"
},
{"id":3,"submenus_id":"po-dosage-liquids",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"dosage","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Dosage"},{"crumb_id":"po-dosage-liquids","crumb_class":"crumb-link","underline":"","crumb_name":"PO Dosage-Liquids"}],
"form":[{"input_label":"Dose Ordered(mg) : ","input_type":"text","name":"dose-ordered","id":"dose-ordered","class":"iv-dosage-inputs operand","input_value":"","tooltip":"prescribed dose or the ordered dose"},
{"input_label":"Dose Available(mg) : ","input_type":"text","name":"dose-available","id":"dose-available","class":"iv-dosage-inputs operand","input_value":"","tooltip":"available dose or stock dose"},
{"input_label":"Volume Available(ml) : ","input_type":"text","name":"volume-available","id":"volume-available","class":"iv-dosage-inputs operand","input_value":""},
{"input_label":"Volume to give(ml) :","input_type":"button","name":"solve-button","id":"solve-button","class":"po-dosage-liquids-inputs","input_value":"Calculate"
}],
"formulae":[{"formula":"((dose-ordered/dose-available)*volume-available)","unit":"ml"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><table cellspacing='0' cellpadding='3' border='0'><tbody><tr><td><p align='center'><font  color='#FFFFFF'><u>&nbsp;dose ordered&nbsp;<br></u>dose available</font></p></td><td><font  color='#FFFFFF'>x volume available</font></td></tr></tbody></table></div>"
},
{"id":4,"submenus_id":"iv-rate-gtt-min",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"iv-rates","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"IV Rates"},{"crumb_id":"iv-rate-gtt-min","crumb_class":"crumb-link","underline":"","crumb_name":"IV Rate(gtt/min)"}],
"form":[
{"input_label":"x=hours","input_type":"radio","name":"time","id":"iv-rate-gtt-min-radio-hours","class":"iv-rate-gtt-min-inputs","input_value":"formulae_hour","onclick":"document.getElementById('volume').disabled=false;document.getElementById('volume').value='';","checked":"checked"},
{"input_label":"x=minutes","input_type":"radio","name":"time","id":"iv-rate-gtt-min-radio-minutes","class":"iv-rate-gtt-min-inputs","input_value":"formulae_minutes","onclick":"document.getElementById('volume').disabled=false;document.getElementById('volume').value='';"},
{"input_label":"x=milliliters/hour","input_type":"radio","name":"time","id":"iv-rate-gtt-min-radio-milliliters","class":"iv-rate-gtt-min-inputs","input_value":"formulae_milliliters","onclick":"document.getElementById('volume').value='N/A';document.getElementById('volume').disabled=true;"},
{"input_label":"x : ","input_type":"text","id":"x-time","class":"iv-rate-gtt-min-inputs operand","input_value":"","tooltip":"duration or time the IV is to be administered"},
{"input_label":"Volume : ","input_type":"text","id":"volume","class":"iv-rate-gtt-min-inputs operand","input_value":"","tooltip":"amount of solution or fluid to be given over a time period"},
{"input_label":"Calibration : ","input_type":"text","id":"calibration","class":"iv-rate-gtt-min-inputs operand","input_value":"","tooltip":"number of drops needed to deliver 1 milliliter of fluid"},
{"input_label":"gtt/min & gtt/15s :","input_type":"button","id":"solve-button","class":"iv-rate-gtt-min-inputs","input_value":"Calculate"
}],
"formulae_hour":[{"formula":"((volume*calibration)/(60*x-time))","unit":"gtt/min"},{"formula":"((volume*calibration)/(60*4*x-time))","unit":"gtt/15s"}],
"formulae_minutes":[{"formula":"((volume*calibration)/(x-time))","unit":"gtt/min"},{"formula":"((volume*calibration)/(4*x-time))","unit":"gtt/15s"}],
"formulae_milliliters":[{"formula":"((x-time*calibration)/(60))","unit":"gtt/min"},{"formula":"((x-time*calibration)/(60*4))","unit":"gtt/15s"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p align='center'><span >To calculate rate using minutes</span></p><div align='center'><center><table cellspacing='0' cellpadding='0' border='0'><tbody><tr><td><p align='center'><font ><u>volume&nbsp; x&nbsp; calibration<br></u>minutes</font></p></td><td><p><sup> =&nbsp; gtt/min</sup></font></p></td></tr></tbody></table></center></div><p align='center'>&nbsp;</p><p align='center'><span >To calculate rate using hours</span></p><div align='center'><center><table cellspacing='0' cellpadding='0' border='0'><tbody><tr><td><p align='center'><font ><u>volume&nbsp; x&nbsp; calibration<br></u>hours&nbsp; x&nbsp; 60</font></p></td><td><p><font ><sup> =&nbsp; gtt/min</sup></font></p></td></tr></tbody></table></center></div></div>"
},
{"id":5,"submenus_id":"iv-rate-ml-hr",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"iv-rates","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"IV Rates"},{"crumb_id":"iv-rate-gtt-min","crumb_class":"crumb-link","underline":"","crumb_name":"IV Rate(mL/hr)"}],
"form":[
{"input_label":"time=hours","input_type":"radio","name":"time","id":"iv-rate-ml-hr-radio-hours","class":"iv-rate-ml-hr-inputs","input_value":"formulae_hour","checked":"checked"},
{"input_label":"time=minutes","input_type":"radio","name":"time","id":"iv-rate-ml-hr-radio-minutes","class":"iv-rate-ml-hr-inputs","input_value":"formulae_minutes"},
{"input_label":"Time : ","input_type":"text","id":"time","class":"iv-rate-ml-hr-inputs operand","input_value":""},
{"input_label":"Volume(mL) :","input_type":"text","id":"volume","class":"iv-rate-ml-hr-inputs operand","input_value":"","tooltip":"amount of solution or fluid to be given over a time period"},
{"input_label":"Rate mL/hour: ","input_type":"button","id":"solve-button","class":"iv-rate-ml-hr-inputs","input_value":"Calculate"
}],
"formulae_hour":[{"formula":"((volume)/(time))","unit":"mL/hr"}],
"formulae_minutes":[{"formula":"((volume*60)/(time))","unit":"mL/hr"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p align='center'><span >To calculate rate using hours</span></p><div align='center'><center><table cellspacing='0' cellpadding='0' border='0'><tbody><tr><td><p align='center'><b><font ><u>VOLUME<br></u>HOURS</font></b></p></td><td><p><font ><b><font size='4'><sup>= mL/hr</sup></font></b></font></p></td></tr></tbody></table></center></div><p align='center'>&nbsp;</p><p align='center'><span >To calculate rate using minutes</span></p><div align='center'><center><table cellspacing='0' cellpadding='0' border='0'><tbody><tr><td><p align='center'><font ><b><u>&nbsp;&nbsp;&nbsp;&nbsp; VOLUME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></u>(MINUTES / 60)</b></font></p></td><td><p><font ><b><font size='4'><sup>= mL/hr</sup></font></b></font></p></td></tr></tbody></table></center></div></div>"
},
{"id":6,"submenus_id":"mcg-min-ml-hr",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"iv-rates","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"IV Rates"},{"crumb_id":"mcg-min-ml-hr","crumb_class":"crumb-link","underline":"","crumb_name":"Epinephrine Solutions to mg/mL"}],
"form":[
{"input_label":"Dose ordered (mcg) : ","input_type":"text","id":"dose-ordered","class":"mcg-min-ml-hr-inputs operand","input_value":"","tooltip":"prescribed dose or the ordered dose in mcg"},
{"input_label":"Dose available (mg) :","input_type":"text","id":"dose-available","class":"mcg-min-ml-hr-inputs operand","input_value":"","tooltip":"available dose or stock dose in mg"},
{"input_label":"Volume available (mL) :","input_type":"text","id":"volume-available","class":"mcg-min-ml-hr-inputs operand","input_value":""},
{"input_label":"Rate (mL/hour): ","input_type":"button","id":"solve-button","class":"mcg-min-ml-hr-inputs","input_value":"Calculate"
}],
"formulae":[{"formula":"((dose-ordered*0.06*volume-available)/(dose-available))","unit":"mL/hr"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><div align='center'>Convert mcg/min to mg/hr by multplying mcg/min with 0.06</div><table cellspacing='0' cellpadding='3' border='0'><tbody><tr><td><p align='center'><font  color='#FFFFFF'><u>&nbsp;dose ordered&nbsp;<br></u>dose available</font></p></td><td><font  color='#FFFFFF'>x volume available</font></td></tr></tbody></table></div>"
},
{"id":7,"submenus_id":"mcg-kg-min-ml-hr",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"iv-rates","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"IV Rates"},{"crumb_id":"mcg-kg-min-ml-hr","crumb_class":"crumb-link","underline":"","crumb_name":"mcg/kg/min as mL/hr"}],
"form":[
{"input_label":"Dose ordered(mcg) : ","input_type":"text","id":"dose-ordered","class":"mcg-kg-min-ml-hr-inputs operand","input_value":"","tooltip":"prescribed dose or the ordered dose in mcg"},
{"input_label":"Weight :","input_type":"text","id":"weight","class":"mcg-kg-min-ml-hr-inputs operand","input_value":""},
{"input_label":"","input_type":"select","id":"load-units","class":"mcg-kg-min-ml-hr-inputs operand","input_value":"","position":"besides","options":[{"id":1,"option_value":"0.453592","option_name":"lb"},{"id":2,"option_value":"1","option_name":"kg"}]},
{"input_label":"Dose available(mg) : ","input_type":"text","id":"dose-available","class":"mcg-kg-min-ml-hr-inputs operand","input_value":"","tooltip":"available dose or stock dose in mg"},
{"input_label":"Volume Available(mL) :","input_type":"text","id":"volume-available","class":"mcg-kg-min-ml-hr-inputs operand","input_value":""},
{"input_label":"Rate (cc/hour): ","input_type":"button","id":"solve-button","class":"mcg-kg-min-ml-hr-inputs","input_value":"Calculate"
}],
"formulae":[{"formula":"((dose-ordered*weight*load-units*0.06*volume-available)/(dose-available))","unit":"mL/hr"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><div align='center'>Convert mcg/kg/min to mg/hr by multplying mcg/kg/min with (weightx0.06). Also 1 lb= 0.45 kg</div><table cellspacing='0' cellpadding='3' border='0'><tbody><tr><td><p align='center'><font  color='#FFFFFF'><u>&nbsp;dose ordered&nbsp;<br></u>dose available</font></p></td><td><font  color='#FFFFFF'>x volume available</font></td></tr></tbody></table></div>"
},
{"id":8,"submenus_id":"pediatric-dose-calculator-clinical",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"clinical","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Clinical"},{"crumb_id":"pediatric-dose-calculator-clinical","crumb_class":"crumb-link","underline":"","crumb_name":"Pediatric Dose Calculator"}],
"form":[
{"input_label":"Weight  : ","input_type":"text","id":"weight","class":"pediatric-dose-calculator-clinical-inputs operand","input_value":""},
{"input_label":"","input_type":"select","id":"load-units","class":"pediatric-dose-calculator-clinical-inputs operand","input_value":"","position":"besides","options":[{"id":1,"option_value":"0.453592","option_name":"lb"},{"id":2,"option_value":"1","option_name":"kg"}]},
{"input_label":"Height :","input_type":"text","id":"height","class":"pediatric-dose-calculator-clinical-inputs operand","input_value":""},
{"input_label":"","input_type":"select","id":"wall-units","class":"pediatric-dose-calculator-clinical-inputs operand","input_value":"","position":"besides","options":[{"id":1,"option_value":"2.54","option_name":"in"},{"id":2,"option_value":"1","option_name":"cm"}]},
{"input_label":"Adult dose","input_type":"text","name":"adult-dose","id":"adult-dose","class":"pediatric-dose-calculator-clinical-inputs operand","input_value":""},
{"input_label":"Child dose: ","input_type":"button","id":"solve-button","class":"pediatric-dose-calculator-clinical-inputs","input_value":"Calculate","tooltip":"dosage for this medication on a child"
}],
"formulae":[{"formula":"(((Math.pow(weight*load-units,0.425)*Math.pow(height*wall-units,0.725)*0.007184)/1.73)*adult-dose)","unit":""}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p align='left'>First, the body surface area (BSA) must be determined:</p><p align='center'><font size='4' >kg<sup>0.425</sup>x cm<sup>0.725</sup>x 0.007184 = BSA</font></p><p align='left'><font size='1'>The above formula is just one method for determining BSA.&nbsp; Results with other formulas will vary.</font></p><p align='left'>Next, the following formula* is used:</p><div align='center'><center><table cellspacing='0' cellpadding='0' border='0'><tbody><tr><td align='center'><u><font size='4' >BSA</font></u></td><td nowrap='' rowspan='2'><font size='4'><b>&nbsp;x</b>adult dose = approx. child dose</font></td></tr><tr><td align='center'><font size='4' >1.73</font></td></tr></tbody></table></center></div></div>"
},
{"id":9,"submenus_id":"o2-remaining-clinical",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"clinical","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Clinical"},{"crumb_id":"o2-remaining-clinical","crumb_class":"crumb-link","underline":"","crumb_name":"O2 Remaining in E-cylinder"}],
"form":[
{"input_label":"Pressure Left (psi) (<2000) : ","input_type":"text","id":"pressure-left","class":"o2-remaining-clinical-inputs operand","input_value":"","tooltip":"pounds per square inch of pressure on cylinders gauge"},
{"input_label":"Flow Rate (L/min) :","input_type":"text","id":"flow-rate","class":"o2-remaining-clinical-inputs operand","input_value":"","tooltip":"amount of flow in liters per minute"},
{"input_label":"Time Left (min): ","input_type":"button","id":"solve-button","class":"o2-remaining-clinical-inputs","input_value":"Calculate","tooltip":"minutes of oxygen left"
}],
"formulae":[{"formula":"Math.floor((0.3474*pressure-left)/(flow-rate))","unit":"min"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p align='center'><u>&nbsp; </u><font size='4' ><u>0.35 x psi on gauge&nbsp;&nbsp;<br></u>L/min to be delivered</font></p></div>"
},
{"id":10,"submenus_id":"bsa-calculator-clinical",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"clinical","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Clinical"},{"crumb_id":"bsa-calculator-clinical","crumb_class":"crumb-link","underline":"","crumb_name":"BSA Calculator"}],
"form":[
{"input_label":"Weight  : ","input_type":"text","id":"weight","class":"bsa-calculator-clinical-inputs operand","input_value":""},
{"input_label":"","input_type":"select","id":"load-units","class":"bsa-calculator-clinical-inputs operand","input_value":"","position":"besides","options":[{"id":1,"option_value":"0.453592","option_name":"lb"},{"id":2,"option_value":"1","option_name":"kg"}]},
{"input_label":"Height  :","input_type":"text","id":"height","class":"bsa-calculator-clinical-inputs operand","input_value":""},
{"input_label":"","input_type":"select","id":"wall-units","class":"bsa-calculator-clinical-inputs operand","input_value":"","position":"besides","options":[{"id":1,"option_value":"2.54","option_name":"in"},{"id":2,"option_value":"1","option_name":"cm"}]},
{"input_label":"BSA: ","input_type":"button","id":"solve-button","class":"bsa-calculator-clinical-inputs","input_value":"Calculate","tooltip":"use nomogram to determine Billy's body surface area"
}],
"formulae":[{"formula":"(Math.pow(weight*load-units,0.425)*Math.pow(height*wall-units,0.725)*0.007184)","unit":""}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p align='center'><font size='4'>kg<sup>0.425</sup>x cm<sup>0.725</sup>x 0.007184 = BSA</font><font size='2'>Note that this is just one formula for calculating bsa. There are other formulae too. So you might get different results with those formulae</font></p></div>"
},
{"id":11,"submenus_id":"drug-absorption-clinical",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"clinical","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Clinical"},{"crumb_id":"drug-absorption-clinical","crumb_class":"crumb-link","underline":"","crumb_name":"Drug Absorption (pKa)"}],
"form":[
{"input_label":"Basic Drug?","input_type":"radio","name":"which-drug","id":"drug-absorption-clinical-radio-basic","class":"drug-absorption-clinical-inputs","input_value":"formulae_basic","checked":"checked"},
{"input_label":"Acidic Drug?","input_type":"radio","name":"which-drug","id":"drug-absorption-clinical-radio-acidic","class":"drug-absorption-clinical-inputs","input_value":"formulae_acidic"},
{"input_label":"pH : ","input_type":"text","id":"ph","class":"drug-absorption-clinical-inputs operand","input_value":"","tooltip":"measure of activity of (solvated) hydrogen ion"},
{"input_label":"pKa :","input_type":"text","id":"pka","class":"drug-absorption-clinical-inputs operand","input_value":"","tooltip":"measure of strength of an acid/base"},
{"input_label":"Ionized(%): ","input_type":"button","id":"solve-button","class":"drug-absorption-clinical-inputs","input_value":"Calculate","tooltip":"% of drug ionized"
}],
"formulae_basic":[{"formula":"((100)/(1+(Math.pow(10,ph-pka))))","unit":"%"}],
"formulae_acidic":[{"formula":"((100)/(1+(Math.pow(10,pka-ph))))","unit":"%"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p align='center'><font size='4' >Percent Ionized Formula</font></p><p align='center'><img width='215' height='90' border='0' src='images/formula12.gif'></p><p align='center'>&nbsp;where x = -1 if acid drug or 1 if basic drug</p><p align='left'>&nbsp;</p></div>"
},
{"id":12,"submenus_id":"or-fluid-requirements-clinical",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"clinical","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Clinical"},{"crumb_id":"or-fluid-requirements-clinical","crumb_class":"crumb-link","underline":"","crumb_name":"O.R. Fluid Requirements"}],
"form":[
{"input_label":"Minimal Tissue Trauma","input_type":"radio","name":"tissue-type","id":"or-fluid-requirements-clinical-radio-minimal-trauma","class":"or-fluid-requirements-clinical-inputs","input_value":"formulae_minimal_trauma","checked":"checked","tooltip":"degree of tissue trauma from minimal to emergency trauma"},
{"input_label":"Low Tissue Trauma","input_type":"radio","name":"tissue-type","id":"or-fluid-requirements-clinical-radio-low-trauma","class":"or-fluid-requirements-clinical-inputs","input_value":"formulae_low_trauma"},
{"input_label":"Moderate Tissue Trauma","input_type":"radio","name":"tissue-type","id":"or-fluid-requirements-clinical-radio-moderate-trauma","class":"or-fluid-requirements-clinical-inputs","input_value":"formulae_moderate_trauma"},
{"input_label":"Severe Tissue Trauma","input_type":"radio","name":"tissue-type","id":"or-fluid-requirements-clinical-radio-severe-trauma","class":"or-fluid-requirements-clinical-inputs","input_value":"formulae_severe_trauma"},
{"input_label":"Emergency Trauma","input_type":"radio","name":"tissue-type","id":"or-fluid-requirements-clinical-radio-emergency-trauma","class":"or-fluid-requirements-clinical-inputs","input_value":"formulae_emergency_trauma"},
{"input_label":"weight : ","input_type":"text","id":"weight","class":"or-fluid-requirements-clinical-inputs operand","input_value":""},
{"input_label":"","input_type":"select","id":"load-units","class":"or-fluid-requirements-clinical-inputs operand","input_value":"","position":"besides","options":[{"id":1,"option_value":"0.453592","option_name":"lb"},{"id":2,"option_value":"1","option_name":"kg"}]},
{"input_label":"IV rate up to mL/hr: ","input_type":"button","id":"solve-button","class":"or-fluid-requirements-clinical-inputs","input_value":"Calculate"
}],
"formulae_minimal_trauma":[{"formula":"(4*weight*load-units)","unit":"mL/hr"}],
"formulae_low_trauma":[{"formula":"(6*weight*load-units)","unit":"mL/hr"}],
"formulae_moderate_trauma":[{"formula":"(8*weight*load-units)","unit":"mL/hr"}],
"formulae_severe_trauma":[{"formula":"(10*weight*load-units)","unit":"mL/hr"}],
"formulae_emergency_trauma":[{"formula":"(17*weight*load-units)","unit":"mL/hr"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p align='center'><font size='4' >Total IVF maintenance requirements = Insensible loss + 3rd space loss requirements</font></p><p align='center'><font size='4'>Insensible loss = 1- 2 mL/kg/hr</font></p></div>"
},
{"id":13,"submenus_id":"npo-fluid-requirements-clinical",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"clinical","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Clinical"},{"crumb_id":"npo-fluid-requirements-clinical","crumb_class":"crumb-link","underline":"","crumb_name":"N.P.O. Fluid Replacement"}],
"form":[
{"input_label":"Weight: ","input_type":"text","id":"weight","class":"npo-fluid-requirements-clinical-inputs operand","input_value":""},
{"input_label":"","input_type":"select","id":"load-units","class":"npo-fluid-requirements-clinical-inputs operand","input_value":"","position":"besides","options":[{"id":1,"option_value":"0.453592","option_name":"lb"},{"id":2,"option_value":"1","option_name":"kg"},]},
{"input_label":"Hours NPO : ","input_type":"text","id":"npo","class":"npo-fluid-requirements-clinical-inputs operand","input_value":"","tooltip":"no. of hours been in NPO"},
{"input_label":"mL in 1st hr,2nd hr and 3rd hr: ","input_type":"button","id":"solve-button","class":"npo-fluid-requirements-clinical-inputs","input_value":"Calculate","tooltip":"NPO deficit for a patient of given weight"
}],
"formulae":[{"formula":"Math.round((2*npo*weight*load-units)/2)","unit":"will be replaced in 1st hr"},{"formula":"Math.round((2*npo*weight*load-units)/4)","unit":"will be replaced in 2nd hr"},{"formula":"Math.round((2*npo*weight*load-units)/4)","unit":"will be replaced in 3rd hr"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p align='left'>IV fluid replacement for<b>NPO&nbsp; deficit = 2mL/kg for each hour NPO</b>prior to surgery.&nbsp;</p><p align='left'>50% of this deficit is replaced within the first hour of surgery with the remaining 50% being replaced over the next 2 hours.&nbsp; If the patient stayed in the hospital overnight with an IV infusing while NPO, subtract this amount from the NPO deficit.</p></div>"
},
{"id":14,"submenus_id":"allowable-blood-loss-clinical",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"clinical","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Clinical"},{"crumb_id":"allowable-blood-loss-clinical","crumb_class":"crumb-link","underline":"","crumb_name":"Allowable Blood Loss"}],
"form":[
{"input_label":"Adult Man","input_type":"radio","name":"person-type","id":"allowable-blood-loss-clinical-radio-adult-man","class":"allowable-blood-loss-clinical-inputs","input_value":"formulae_adult_man","checked":"checked"},
{"input_label":"Adult Woman","input_type":"radio","name":"person-type","id":"allowable-blood-loss-clinical-radio-adult-woman","class":"allowable-blood-loss-clinical-inputs","input_value":"formulae_adult_woman"},
{"input_label":"weight : ","input_type":"text","id":"weight","class":"allowable-blood-loss-clinical-inputs operand","input_value":""},
{"input_label":"","input_type":"select","id":"load-units","class":"allowable-blood-loss-clinical-inputs operand","input_value":"","position":"besides","options":[{"id":1,"option_value":"0.453592","option_name":"lb"},{"id":2,"option_value":"1","option_name":"kg"}]},
{"input_label":"Current Hct in %: ","input_type":"text","id":"current-hct","class":"allowable-blood-loss-clinical-inputs operand","input_value":"","tooltip":"eg. hct of 25% means 25 mL of red blood cells in 100 mL blood"},
{"input_label":"Estimated Blood Volume and Allowable Blood Loss: ","input_type":"button","id":"solve-button","class":"allowable-blood-loss-clinical-inputs","input_value":"Calculate"
}],
"formulae_adult_man":[{"formula":"Math.round(75*weight*load-units)","unit":"is the Estimated Blood Volume(EBV) and "},{"formula":"Math.round((75*weight*load-units*((current-hct/100)-0.3))/(current-hct/100))","unit":"is the Allowable blood loss(ABV)"}],
"formulae_adult_woman":[{"formula":"Math.round(65*weight*load-units)","unit":"is the Estimated Blood Volume(EBV) and "},{"formula":"Math.round((65*weight*load-units*((current-hct/100)-0.3))/(current-hct/100))","unit":"is the Allowable blood loss(ABV)"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p align='center'><font size='4'>Allowable Blood Loss (ABL)*</font></p><div align='center'><center><table cellspacing='0' cellpadding='5' border='3' ><tbody><tr><td><div align='center'><table cellspacing='0' cellpadding='0' border='0'><tbody><tr><td><h3 align='center'><font><u>EBV x (H<font size='1'>i</font>- H<font size='1'>f</font>)<br></u>H<font size='1'>i</font></font></h3></td><td><h3><font>&nbsp;= ABL</font></h3></td></tr></tbody></table></div><p><font size='2'>H<sub>i</sub>=nitial Hct<br>H<sub>f</sub>= final lowest acceptable Hct</font></p></td></tr></tbody></table></center></div><h3 align='center'>&nbsp;</h3><font size='4' >Estimated Blood Volume (EBV)</font></p><div align='center'><center><table cellspacing='0' cellpadding='3' border='3'><tbody><tr><td><h4>EBV = weight (kg) x average blood volume</h4></td></tr></tbody></table></center></div></div>"
},
{"id":15,"submenus_id":"estimated-blood-volume-clinical",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"clinical","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Clinical"},{"crumb_id":"estimated-blood-volume-clinical","crumb_class":"crumb-link","underline":"","crumb_name":"Estimated Blood Volume"}],
"form":[
{"input_label":"Adult Man","input_type":"radio","name":"person-type","id":"estimated-blood-volume-clinical-radio-adult-man","class":"allowable-blood-loss-clinical-inputs","input_value":"formulae_adult_man","checked":"checked"},
{"input_label":"Adult Woman","input_type":"radio","name":"person-type","id":"estimated-blood-volume-clinical-radio-adult-woman","class":"allowable-blood-loss-clinical-inputs","input_value":"formulae_adult_woman"},
{"input_label":"weight  : ","input_type":"text","id":"weight","class":"estimated-blood-volume-clinical-inputs operand","input_value":""},
{"input_label":"","input_type":"select","id":"load-units","class":"estimated-blood-volume-clinical-inputs operand","input_value":"","position":"besides","options":[{"id":1,"option_value":"0.453592","option_name":"lb"},{"id":2,"option_value":"1","option_name":"kg"}]},
{"input_label":"Current Hct in %: ","input_type":"text","id":"current-hct","class":"estimated-blood-volume-clinical-inputs operand","input_value":"","tooltip":"eg. hct of 25% means 25 mL of red blood cells in 100 mL blood"},
{"input_label":"Estimated Blood Volume and Allowable Blood Loss: ","input_type":"button","id":"solve-button","class":"estimated-blood-volume-clinical-inputs","input_value":"Calculate"
}],
"formulae_adult_man":[{"formula":"Math.round(75*weight*load-units)","unit":"is the Estimated Blood Volume(EBV) "}],
"formulae_adult_woman":[{"formula":"Math.round(65*weight*load-units)","unit":"is the Estimated Blood Volume(EBV) "}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p align='center'><h3 align='center'>&nbsp;</h3><font size='4' >Estimated Blood Volume (EBV)</font></p><div align='center'><center><table cellspacing='0' cellpadding='3' border='3'><tbody><tr><td><h4>EBV = weight (kg) x average blood volume</h4></td></tr></tbody></table></center></div></div>"
},
{"id":16,"submenus_id":"ideal-body-weight-clinical",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"clinical","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Clinical"},{"crumb_id":"ideal-body-weight-clinical","crumb_class":"crumb-link","underline":"","crumb_name":"Ideal Body Weight (IBW)"}],
"form":[
{"input_label":"Male","input_type":"radio","name":"person-type","id":"ideal-body-weight-clinical-radio-male","class":"ideal-body-weight-clinical-inputs","input_value":"formulae_male","checked":"checked"},
{"input_label":"Female","input_type":"radio","name":"person-type","id":"ideal-body-weight-clinical-radio-adult-male","class":"ideal-body-weight-clinical-inputs","input_value":"formulae_female"},
{"input_label":"Weight : ","input_type":"text","id":"weight","class":"ideal-body-weight-clinical-inputs operand","input_value":""},
{"input_label":"","input_type":"select","id":"load-units","class":"ideal-body-weight-clinical-inputs operand","input_value":"","position":"besides","options":[{"id":1,"option_value":"2.2","option_name":"lb"},{"id":2,"option_value":"1","option_name":"kg"}]},
{"input_label":"Height ","input_type":"text","id":"height","class":"ideal-body-weight-clinical-inputs operand","input_value":""},
{"input_label":"","input_type":"select","id":"wall-units","class":"ideal-body-weight-clinical-inputs operand","input_value":"","position":"besides","options":[{"id":1,"option_value":"60)","option_name":"in"},{"id":2,"option_value":"152.4) * 0.3937","option_name":"cm"}]},
{"input_label":"Ideal Body Weight(IBW): ","input_type":"button","id":"solve-button","class":"ideal-body-weight-clinical-inputs","input_value":"Calculate","tooltip":"check proper weight for height to prevent any health risks"
}],
"formulae_male":[{"formula":"((Math.round(10*(((height-wall-units)*2.3+50)))/10)","unit":"kg is the Ideal Body wieght(IBW) and  "},
{"formula":"((Math.round(10*(((((height-wall-units)*2.3+50)*0.3)+(((height-wall-units)*2.3+50))))/10)","unit":"kg is  Ideal Body wieght + 30% (IBW+30%) and "},
{"formula":"((Math.round(10*((0.4*((weight/load-units)-(((height-wall-units)*2.3+50)))+(((height-wall-units)*2.3+50))))/10)","unit":"kg is the Adjusted Body wieght(ABW) "}],
"formulae_female":[{"formula":"((Math.round(10*(((height-wall-units)*2.3+45.5)))/10)","unit":"kg is the Ideal Body wieght(IBW) and  "},
{"formula":"((Math.round(10*(((((height-wall-units)*2.3+45.5)*0.3)+(((height-wall-units)*2.3+45.5))))/10)","unit":"kg is  Ideal Body wieght + 30% (IBW+30%) and "},
{"formula":"((Math.round(10*((0.4*((weight/load-units)-(((height-wall-units)*2.3+45.5)))+(((height-wall-units)*2.3+45.5))))/10)","unit":"kg is the Adjusted Body wieght(ABW) "}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p><b>IBW</b><br>Estimated ideal body weight in (kg)<br><b>Males: IBW = 50 kg + 2.3 kg for each inch over 5 feet.<br>Females: IBW = 45.5 kg + 2.3 kg for each inch over 5 feet.</b></p><p><b>ABW<br></b>Estimated adjusted body weight (kg)<b><br></b>If the actual body weight is greater than 30% of the calculated&nbsp;IBW, calculate the adjusted body weight (ABW):<b><br>ABW = IBW + 0.4(actual weight - IBW)</b></p></div>"
},
{"id":17,"submenus_id":"adjusted-body-weight-clinical",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"clinical","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Clinical"},{"crumb_id":"adjusted-body-weight-clinical","crumb_class":"crumb-link","underline":"","crumb_name":"Adjusted Body Weight (IBW)"}],
"form":[
{"input_label":"Male","input_type":"radio","name":"person-type","id":"adjusted-body-weight-clinical-radio-male","class":"ideal-body-weight-clinical-inputs","input_value":"formulae_male","checked":"checked"},
{"input_label":"Female","input_type":"radio","name":"person-type","id":"adjusted-body-weight-clinical-radio-adult-male","class":"ideal-body-weight-clinical-inputs","input_value":"formulae_female"},
{"input_label":"Weight : ","input_type":"text","id":"weight","class":"adjusted-body-weight-clinical-inputs operand","input_value":""},
{"input_label":"","input_type":"select","id":"load-units","class":"adjusted-body-weight-clinical-inputs operand","input_value":"","position":"besides","options":[{"id":1,"option_value":"2.2","option_name":"lb"},{"id":2,"option_value":"1","option_name":"kg"}]},
{"input_label":"Height ","input_type":"text","id":"height","class":"adjusted-body-weight-clinical-inputs operand","input_value":""},
{"input_label":"","input_type":"select","id":"wall-units","class":"adjusted-body-weight-clinical-inputs operand","input_value":"","position":"besides","options":[{"id":1,"option_value":"60)","option_name":"in"},{"id":2,"option_value":"152.4) * 0.3937","option_name":"cm"}]},
{"input_label":"Adjusted Body Weight(IBW): ","input_type":"button","id":"solve-button","class":"adjusted-body-weight-clinical-inputs","input_value":"Calculate","tooltip":"check proper weight for height to prevent any health risks"
}],
"formulae_male":[{"formula":"((Math.round(10*(((height-wall-units)*2.3+50)))/10)","unit":"kg is the Ideal Body Weight(IBW) and  "},
{"formula":"((Math.round(10*(((((height-wall-units)*2.3+50)*0.3)+(((height-wall-units)*2.3+50))))/10)","unit":"kg is  Ideal Body Weight + 30% (IBW+30%) and "},
{"formula":"((Math.round(10*((0.4*((weight/load-units)-(((height-wall-units)*2.3+50)))+(((height-wall-units)*2.3+50))))/10)","unit":"kg is the Adjusted Body Weight(ABW) "}],
"formulae_female":[
{"formula":"((Math.round(10*((0.4*((weight/load-units)-(((height-wall-units)*2.3+45.5)))+(((height-wall-units)*2.3+45.5))))/10)","unit":"kg is the Adjusted Body wieght(ABW) and "},
{"formula":"((Math.round(10*(((height-wall-units)*2.3+45.5)))/10)","unit":"kg is the Ideal Body wieght(IBW) and "},
{"formula":"((Math.round(10*(((((height-wall-units)*2.3+45.5)*0.3)+(((height-wall-units)*2.3+45.5))))/10)","unit":"kg is  Ideal Body wieght + 30% (IBW+30%)  "},],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p><b>IBW</b><br>Estimated ideal body weight in (kg)<br><b>Males: IBW = 50 kg + 2.3 kg for each inch over 5 feet.<br>Females: IBW = 45.5 kg + 2.3 kg for each inch over 5 feet.</b></p><p><b>ABW<br></b>Estimated adjusted body weight (kg)<b><br></b>If the actual body weight is greater than 30% of the calculated&nbsp;IBW, calculate the adjusted body weight (ABW):<b><br>ABW = IBW + 0.4(actual weight - IBW)</b></p></div>"
},
{"id":18,"submenus_id":"abg-interpreter-clinical",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"clinical","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Clinical"},{"crumb_id":"abg-interpreter-clinical","crumb_class":"crumb-link","underline":"","crumb_name":"ABG Interpreter"}]
},
{"id":20,"submenus_id":"fahrenheit-celcius-conversions",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"conversion","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Conversion"},{"crumb_id":"fahrenheit-celcius-conversions","crumb_class":"crumb-link","underline":"","crumb_name":"Fahrenheit and Celcius Conversions"}],
"form":[
{"input_label":"Temperature : ","input_type":"text","id":"temperature","class":"fahrenheit-celcius-conversions-inputs operand","input_value":""},
{"input_label":"Convert To Fahrenheit","input_type":"radio","name":"temperature-type","id":"fahrenheit-celcius-conversions-radio-fahrenheit","class":"fahrenheit-celcius-conversions-inputs","input_value":"formulae_fahrenheit","checked":"checked"},
{"input_label":"Convert To Celcius","input_type":"radio","name":"temperature-type","id":"fahrenheit-celcius-conversions-radio-celcius","class":"fahrenheit-celcius-conversions-inputs","input_value":"formulae_celcius"},
{"input_label":"Result: ","input_type":"button","id":"solve-button","class":"fahrenheit-celcius-conversions-inputs","input_value":"Calculate"
}],
"formulae_fahrenheit":[{"formula":"(((temperature*9)/5)+32)","unit":"degreee fanrenheit "}],
"formulae_celcius":[{"formula":"((temperature-32)*5)/9","unit":"degree celcius"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p align='center'><font size='4'> &deg;C&nbsp; x&nbsp; 9/5 + 32 = &deg;F</font></p><p align='center'><font size='4'> (&deg;F&nbsp; -&nbsp; 32)&nbsp; x&nbsp; 5/9 = &deg;C</font></p></div>"
},
{"id":21,"submenus_id":"pounds-to-kilograms-conversions",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"conversion","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Conversion"},{"crumb_id":"pounds-to-kilograms-conversions","crumb_class":"crumb-link","underline":"","crumb_name":"Pounds And Kilograms Conversions"}],
"form":[
{"input_label":"Weight : ","input_type":"text","id":"weight","class":"pounds-to-kilograms-conversions-inputs operand","input_value":""},
{"input_label":"Convert Pounds To Kilograms","input_type":"radio","name":"load-type","id":"pounds-to-kilograms-conversions-radio-fahrenheit","class":"pounds-to-kilograms-conversions-inputs","input_value":"formulae_kilograms","checked":"checked"},
{"input_label":"Convert Kilograms To Pounds","input_type":"radio","name":"load-type","id":"pounds-to-kilograms-conversions-radio-celcius","class":"pounds-to-kilograms-conversions-inputs","input_value":"formulae_pounds"},
{"input_label":"Result: ","input_type":"button","id":"solve-button","class":"pounds-to-kilograms-conversions-inputs","input_value":"Calculate"
}],
"formulae_kilograms":[{"formula":"(weight/2.2)","unit":"kilograms "}],
"formulae_pounds":[{"formula":"(weight*2.2)","unit":"pounds"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p align='center'><font size='4'>lbs / 2.2 = kilograms</font></p><p align='center'><font size='4'>kg x&nbsp; 2.2 = pounds</font></p></div>"
},
{"id":22,"submenus_id":"inch-to-centimeters-conversions",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"conversion","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Conversion"},{"crumb_id":"inch-to-centimeters-conversions","crumb_class":"crumb-link","underline":"","crumb_name":"Inch And Centimeters Conversions"}],
"form":[
{"input_label":"Length : ","input_type":"text","id":"length","class":"inch-to-centimeters-conversions-inputs operand","input_value":""},
{"input_label":"Convert Inch To Centimeters","input_type":"radio","name":"length-type","id":"inch-to-centimeters-conversions-radio-centimeters","class":"inch-to-centimeters-conversions-inputs","input_value":"formulae_centimeters","checked":"checked"},
{"input_label":"Convert Cemtimeters To Inches","input_type":"radio","name":"length-type","id":"inch-to-centimeters-conversions-radio-celcius","class":"inch-to-centimeters-conversions-inputs","input_value":"formulae_inches"},
{"input_label":"Result: ","input_type":"button","id":"solve-button","class":"inch-to-centimeters-conversions-inputs","input_value":"Calculate"
}],
"formulae_centimeters":[{"formula":"(length*2.54)","unit":"cms "}],
"formulae_inches":[{"formula":"(length*0.3937008)","unit":"inches"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p align='center'><font size='4'>cm&nbsp; x&nbsp; 0.39* = in</font></p><p align='center'><font size='4'>in&nbsp; x&nbsp; 2.54 = cm</font></p></div>"
},
{"id":23,"submenus_id":"foot-inch-to-centimeters-conversions",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"conversion","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Conversion"},{"crumb_id":"foot-inch-to-centimeters-conversions","crumb_class":"crumb-link","underline":"","crumb_name":"Foot, Inch to Centimeters"}],
"form":[
{"input_label":"Convert Foot,Inch To Cms","input_type":"radio","name":"length-type","id":"foot-inch-to-centimeters-conversions-radio-centimeters","class":"foot-inch-to-centimeters-conversions-inputs","input_value":"formulae_centimeters","checked":"checked","onclick":"document.getElementById('feet').disabled=false;document.getElementById('feet').value=''"},
{"input_label":"Convert Centimeters To Foot,Inches","input_type":"radio","name":"length-type","id":"foot-inch-to-centimeters-conversions-radio-foot","class":"inch-to-centimeters-conversions-inputs","input_value":"formulae_foot_inches","onclick":"document.getElementById('feet').value='N/A';document.getElementById('feet').disabled=true;"},
{"input_label":"Length in ft: ","input_type":"text","id":"feet","class":"foot-inch-to-centimeters-conversions-inputs operand","input_value":""},
{"input_label":"Length in in/cm: ","input_type":"text","id":"inch-cm","class":"foot-inch-to-centimeters-conversions-inputs operand","input_value":""},
{"input_label":"Result: ","input_type":"button","id":"solve-button","class":"foot-inch-to-centimeters-conversions-inputs","input_value":"Calculate"
}],
"formulae_centimeters":[{"formula":"(((feet*12)+inch-cm)*2.54)","unit":"cms "}],
"formulae_foot_inches":[{"formula":"(Math.floor((inch-cm*0.3937008)/12))","unit":"ft"},{"formula":"((inch-cm*0.3937008)%12)","unit":"inches"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><center><p align='center'><font size='4'>cm&nbsp; x&nbsp; 0.39* = in</font></p><div align='center'><center><table cellspacing='0' cellpadding='0' border='0'><tbody><tr><td align='center'><p align='center'><font size='4'><u>in</u></font></p></td><td align='center' rowspan='2'><p align='center'><font size='4'>&nbsp;= ft</font></p></td></tr><tr><td align='center'><p align='center'><font size='4'>12</font></p></td></tr></tbody></table></center></div><p align='center'><font size='4'>in&nbsp; x&nbsp; 2.54 = cm</font></p></center></center></div>"
},
{"id":24,"submenus_id":"non-metric-to-metric-conversions",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"conversion","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Conversion"},{"crumb_id":"non-metric-to-metric-conversions","crumb_class":"crumb-link","underline":"","crumb_name":"Inch And Centimeters Conversions"}],
"form":[
{"input_label":"Enter Amount : ","input_type":"text","id":"amount","class":"non-metric-to-metric-conversions-inputs operand","input_value":""},
{"input_label":"Convert ounce => milliliter","input_type":"radio","name":"conversion-type","id":"non-metric-to-metric-conversions-radio-ounce-milliliter","class":"non-metric-to-metric-conversions-inputs","input_value":"formulae_ounce_milliliter","checked":"checked"},
{"input_label":"Convert tablespoon => milliliter","input_type":"radio","name":"conversion-type","id":"non-metric-to-metric-conversions-radio-tablespoon-milliliter","class":"non-metric-to-metric-conversions-inputs","input_value":"formulae_tablespoon_milliliter"},
{"input_label":"Convert teaspoon => milliliter","input_type":"radio","name":"conversion-type","id":"non-metric-to-metric-conversions-radio-teaspoon-milliliter","class":"non-metric-to-metric-conversions-inputs","input_value":"formulae_teaspoon_milliliter"},
{"input_label":"Convert grain => milligram","input_type":"radio","name":"conversion-type","id":"non-metric-to-metric-conversions-radio-grain-milligram","class":"non-metric-to-metric-conversions-inputs","input_value":"formulae_grain_milligram"},
{"input_label":"Convert dram => milliliter","input_type":"radio","name":"conversion-type","id":"non-metric-to-metric-conversions-radio-dram-milliliter","class":"non-metric-to-metric-conversions-inputs","input_value":"formulae_dram_milliliter"},
{"input_label":"Convert minum => milliliter","input_type":"radio","name":"conversion-type","id":"non-metric-to-metric-conversions-radio-minum-milliliter","class":"non-metric-to-metric-conversions-inputs","input_value":"formulae_minum_milliliter"},
{"input_label":"Convert cup => milliliter","input_type":"radio","name":"conversion-type","id":"non-metric-to-metric-conversions-radio-cup-milliliter","class":"non-metric-to-metric-conversions-inputs","input_value":"formulae_cup_milliliter"},
{"input_label":"Convert drop => milliliter","input_type":"radio","name":"conversion-type","id":"non-metric-to-metric-conversions-radio-drop-milliliter","class":"non-metric-to-metric-conversions-inputs","input_value":"formulae_drop_milliliter"},
{"input_label":"Result: ","input_type":"button","id":"solve-button","class":"non-metric-to-metric-conversions-inputs","input_value":"Calculate"
}],
"formulae_ounce_milliliter":[{"formula":"(amount*30)","unit":"ml "}],
"formulae_tablespoon_milliliter":[{"formula":"(amount*15)","unit":"ml"}],
"formulae_teaspoon_milliliter":[{"formula":"(amount*5)","unit":"ml"}],
"formulae_grain_milligram":[{"formula":"(amount*64.8)","unit":"mg"}],
"formulae_dram_milliliter":[{"formula":"(amount*4)","unit":"ml"}],
"formulae_minum_milliliter":[{"formula":"(amount*0.06)","unit":"ml"}],
"formulae_cup_milliliter":[{"formula":"(amount*236.6)","unit":"ml"}],
"formulae_drop_milliliter":[{"formula":"(amount*0.06)","unit":"ml"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p ><font size='4'>1 ounce=30ml</font></p><p ><font size='4'>1 tablespoon=15 ml</font></p><p ><font size='4'>1 teaspoon=5 ml</font></p><p ><font size='4'>1 grain=64.8 mg</font></p><p ><font size='4'>1 dram=4 ml</font></p><p ><font size='4'>1 minum=0.06 ml</font></p><p ><font size='4'>1 cup=236.6 ml</font></p><p><font size='4'>1 drop=0.06 ml</font></p></div>"
},
{"id":25,"submenus_id":"metric-units-conversions",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"conversion","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Conversion"},{"crumb_id":"metric-units-conversions","crumb_class":"crumb-link","underline":"","crumb_name":"Metric Units Conversions"}],
"form":[
{"input_label":"Enter Metric Unit: ","input_type":"text","id":"amount","class":"metric-units-conversions-inputs operand","input_value":""},
{"input_label":"Microgram","input_type":"radio","name":"conversion-type","id":"metric-units-conversions-radio-microgram","class":"metric-units-conversions-inputs","input_value":"formulae_microgram","checked":"checked"},
{"input_label":"Milligram","input_type":"radio","name":"conversion-type","id":"metric-units-conversions-radio-milligram","class":"metric-units-conversions-inputs","input_value":"formulae_milligram"},
{"input_label":"Gram","input_type":"radio","name":"conversion-type","id":"metric-units-conversions-radio-gram","class":"metric-units-conversions-inputs","input_value"                                                                                                                                                                                        :"formulae_gram"},
{"input_label":"Milliliter","input_type":"radio","name":"conversion-type","id":"metric-units-conversions-radio-milliliter","class":"metric-units-conversions-inputs","input_value"                                                                                                                                                                                        :"formulae_milliliter"},
{"input_label":"Liters","input_type":"radio","name":"conversion-type","id":"metric-units-conversions-radio-liters","class":"metric-units-conversions-inputs","input_value"                                                                                                                                                                                        :"formulae_liters"},
{"input_label":"Result: ","input_type":"button","id":"solve-button","class":"metric-units-conversions-inputs","input_value":"Calculate"
}],
"formulae_microgram":[{"formula":"(amount*1)","unit":"microgram","rounding":"no"},{"formula":"(amount*0.001)","unit":"milligram","rounding":"no"},{"formula":"(amount*0.000001)","unit":"gram","rounding":"no"}],
"formulae_milligram":[{"formula":"(amount*1000)","unit":"microgram ","rounding":"no"},{"formula":"(amount*1)","unit":"milligram","rounding":"no"},{"formula":"(amount*0.001)","unit":"gram","rounding":"no"}],
"formulae_gram":[{"formula":"(amount*1000000)","unit":"microgram ","rounding":"no"},{"formula":"(amount*1)","unit":"milligram","rounding":"no"},{"formula":"(amount*0.001)","unit":"gram","rounding":"no"}],
"formulae_milliliter":[{"formula":"(amount*1)","unit":"milliliter or cc","rounding":"no"},{"formula":"(amount*0.001)","unit":"liters","rounding":"no"}],
"formulae_liters":[{"formula":"(amount*1000)","unit":"milliliter or cc","rounding":"no"},{"formula":"(amount*1)","unit":"liters","rounding":"no"}],

"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p ><font size='4'>1 microgram = .001 milligrams = .000001 grams</font></p><p ><font size='4'>1 gram = 1,000 milligrams = 1,000,000 micrograms</font></p><p ><font size='4'>1 milliliter = .001 liters</font></p><p ><font size='4'>1 liter = 1000 milliliters</font></p></div>"
},
{"id":26,"submenus_id":"percent-solutions-to-mg-mL-conversions",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"conversion","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Conversion"},{"crumb_id":"percent-solutions-to-mg-mL-conversions","crumb_class":"crumb-link","underline":"","crumb_name":"% Solutions to mg/mL"}],
"form":[
{"input_label":"Solution in % : ","input_type":"text","id":"solution","class":"percent-solutions-to-mg-mL-conversions-inputs operand","input_value":"","tooltip":"1% solution is same as 1000 mL in 100 cc or 10mg/cc"},
{"input_label":"Result: ","input_type":"button","id":"solve-button","class":"percent-solutions-to-mg-mL-conversions-inputs","input_value":"Calculate"
}],
"formulae":[{"formula":"(solution*10)","unit":"mg/cc "}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p align='center'> A 1% solution is the same as 1000 milligrams in 100 cc or 10mg/cc.</p></div>"
},
{"id":27,"submenus_id":"epinephrine-solutions-to-mg-mL-conversions",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"conversion","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Conversion"},{"crumb_id":"epinephrine-solutions-to-mg-mL-conversions","crumb_class":"crumb-link","underline":"","crumb_name":"Epinephrine solutions to mg/mL"}],
"form":[
{"input_label":"Solution in % : ","input_type":"text","id":"solution","class":"epinephrine-solutions-to-mg-mL-conversions-inputs operand","input_value":"","tooltip":"1% solution is same as 1000 mL in 100 cc or 10mg/cc"},
{"input_label":"Result: ","input_type":"button","id":"solve-button","class":"epinephrine-solutions-to-mg-mL-conversions-inputs","input_value":"Calculate"
}],
"formulae":[{"formula":"(solution*10)","unit":"mg/cc "}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p align='center'> A 1% solution is the same as 1000 milligrams in 100 cc or 10mg/cc.</p></div>"
},
{"id":28,"submenus_id":"infusion-time-iv-time",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"infusion-time","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Infusion Time"},{"crumb_id":"infusion-time-iv-time","crumb_class":"crumb-link","underline":"","crumb_name":"IV Time(hrs)"}],
"form":[
{"input_label":"IV Pump","input_type":"radio","name":"is-iv-pump","id":"infusion-time-iv-time-radio-iv-pump","class":"infusion-time-iv-time-inputs","input_value":"formulae_with_iv_pump","onclick":"document.getElementById('gtt-min').value='N/A';document.getElementById('iv-calibration').value='N/A';document.getElementById('gtt-min').disabled=true;document.getElementById('iv-calibration').disabled=true;document.getElementById('ml-hr').disabled=false;document.getElementById('ml-hr').value='';"},
{"input_label":"No IV Pump","input_type":"radio","name":"is-iv-pump","id":"infusion-time-iv-time-radio-without-iv-pump","class":"infusion-time-iv-time-inputs","input_value":"formulae_without_iv_pump","onclick":"document.getElementById('gtt-min').disabled=false;document.getElementById('iv-calibration').disabled=false;document.getElementById('gtt-min').value='';document.getElementById('iv-calibration').value='';document.getElementById('ml-hr').value='N/A';document.getElementById('ml-hr').disabled=true;"},
{"input_label":"Enter Volume : ","input_type":"text","id":"volume","class":"infusion-time-iv-time-inputs operand","input_value":"","tooltip":"The amount of solution to be given over a time period"},
{"input_label":"Enter mL/hr : ","input_type":"text","id":"ml-hr","class":"infusion-time-iv-time-inputs operand","input_value":""},
{"input_label":"Enter gtts/min : ","input_type":"text","id":"gtt-min","class":"infusion-time-iv-time-inputs operand","input_value":"","tooltip":"drip rate,flow rate or watch count of IV"},
{"input_label":"Enter IV Calibration : ","input_type":"text","id":"iv-calibration","class":"infusion-time-iv-time-inputs operand","input_value":"","tooltip":"drop factor or number of drops needed to deliver 1 mL of fluid"},
{"input_label":"Hours and Minutes :","input_type":"button","id":"solve-button","class":"infusion-time-iv-time-inputs","input_value":"Calculate"
}],
"formulae_with_iv_pump":[{"formula":"Math.floor((volume)/(ml-hr))","unit":"Hours"},{"formula":"Math.round((((volume)/(ml-hr))-Math.floor((volume)/(ml-hr)))*60)","unit":"Minutes"}],
"formulae_without_iv_pump":[{"formula":"Math.floor((volume)/(gtt-min*60/iv-calibration))","unit":"Hours"},{"formula":"Math.round((((volume)/(gtt-min*60/iv-calibration))-Math.floor((volume)/(gtt-min*60/iv-calibration)))*60)","unit":"Minutes"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><p align='center'>Basic Time</p><div align='center'><center><table cellspacing='0' cellpadding='5' border='0'><tbody><tr><td align='center'><font><u>Volume<br></u>Rate</font></td><td><font >= Hours</font></td></tr></tbody></table></center></div><p align='center'>Time Calculated Using IV Tubing Only</p><div align='center'><center><table cellspacing='0' cellpadding='5' border='0'><tbody><tr><td align='center'><font>Volume<font size='4'>/</font></font></td><td align='center'><font size='6' >(</font></td><td align='center'><font ><u>&nbsp;&nbsp; gtt/min&nbsp;<br></u>Calibration</font></td><td align='center'><font >x60</font></td><td><font size='6' >)</font></td><td><font>= Hours</font></td></tr></tbody></table></center></div></div>"
},
{"id":29,"submenus_id":"propofol-bolus-infusion-drug",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"drug","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Drug"},{"crumb_id":"propofol-bolus-infusion-drug","crumb_class":"crumb-link","underline":"","crumb_name":"Propofol Bolus/Infusion"}],
"form":[
{"input_label":"Weight: ","input_type":"text","id":"weight","class":"propofol-bolus-infusion-drug-inputs operand","input_value":"","tooltip":"as per Propofol 10mg/mL"},
{"input_label":"","input_type":"select","id":"load-units","class":"propofol-bolus-infusion-drug-inputs operand","input_value":"","position":"besides","options":[{"id":1,"option_value":"0.453592","option_name":"lb"},{"id":2,"option_value":"1","option_name":"kg"}]},
{"input_label":"Sedation, Induction and Manitenance: ","input_type":"button","id":"solve-button","class":"propofol-bolus-infusion-drug-inputs","input_value":"Calculate"
}],
"formulae":[{"formula":"Math.round((((25 * weight*load-units) / 1000 * 60 ) / 10) * 1)","unit":"mL/hr to"},{"formula":"Math.round((((100 * weight*load-units) / 1000 * 60 ) / 10) * 1)","unit":"mL/hr is the Sedation--------"},{"formula":"Math.round(weight*load-units * 1 / 10)","unit":"mL to"},{"formula":"Math.round(weight*load-units * 2.5 / 10)","unit":"mL is the Induction---------------"},{"formula":"Math.round((((50 * weight*load-units) / 1000 * 60 ) / 10) * 1)","unit":"mL/hr to"},{"formula":"Math.round((((200 * weight*load-units) / 1000 * 60 ) / 10) * 1)","unit":"mL/hr is the Maintenance"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><div align='center'><center><table cellspacing='0' cellpadding='0' border='3' bordercolordark='#000000' bordercolorlight='#CCCC99'><tbody><tr><td><p><b>Sedation 25-100 mcg/kg/min</b></p><p><b>Induction 1-2.5 mg/kg</b></p><p><b>Maintenance 50-200 mcg/kg/min</b></p></td></tr></tbody></table></center></div></div>"
},
{"id":30,"submenus_id":"muscle-relaxants-drug",
"breadcrumbs":[{"crumb_id":"home-tabs","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Home"},{"crumb_id":"drug","crumb_class":"crumb-link","underline":"crumb-underline","crumb_name":"Drug"},{"crumb_id":"muscle-relaxants-drug","crumb_class":"crumb-link","underline":"","crumb_name":"Muscle Relaxants"}],
"form":[
{"input_label":"Weight  : ","input_type":"text","id":"weight","class":"muscle-relaxants-drug-inputs operand","input_value":""},
{"input_label":"","input_type":"select","id":"load-units","class":"muscle-relaxants-drug-inputs operand","input_value":"","position":"besides","options":[{"id":1,"option_value":"0.453592","option_name":"lb"},{"id":2,"option_value":"1","option_name":"kg"}]},
{"input_label":"Result: ","input_type":"button","id":"solve-button","class":"muscle-relaxants-drug-inputs","input_value":"Calculate"
}],
"formulae":[{"formula":"Math.round((1 * (weight *load-units) / 20 * 1)*10)/10","unit":"mL is succinylcholine 20mg/mL."},{"formula":"Math.round((0.5 * (weight *load-units) /3 * 1)*10)/10","unit":"mL to"},{"formula":"Math.round((0.6 * (weight *load-units) / 3 * 1)*10)/10","unit":"mL is tubocurarine 3mg/mL."},{"formula":"Math.round((0.3 * (weight *load-units) / 2 *1)*10)/10","unit":"mL  to "},{"formula":"Math.round((0.4 * (weight *load-units) / 2 *1)*10)/10","unit":"mL is metocurine 2mg/mL."},{"formula":"Math.round((0.5 * (weight *load-units) / 10 *1)*10)/10","unit":"mL to"},{"formula":"Math.round((0.6 * (weight *load-units) / 10 *1)*10)/10","unit":"mL is atracurium 10mg/mL"},{"formula":"Math.round((0.2 * (weight *load-units) / 2 *1)*10)/10","unit":"mL to "},{"formula":"Math.round((0.25 * (weight *load-units) / 2 *1)*10)/10","unit":"mL is mivacurium 2mg/mL."},{"formula":"Math.round((.05 * (weight *load-units) / 1 *1)*10)/10","unit":"mL to "},{"formula":"Math.round((.08 * (weight *load-units) / 1 *1)*10)/10","unit":"mL is doxacurium 1mg/mL."},{"formula":"Math.round((.08 * (weight *load-units) / 1 *1)*10)/10","unit":"mL to"},{"formula":"Math.round((.12 * (weight *load-units) / 1 *1)*10)/10","unit":"mL is pancuronium 1mg/mL."},{"formula":"Math.round((.08 * (weight *load-units) / 2 *1)*10)/10","unit":"mL to "},{"formula":"Math.round((0.12 * (weight *load-units) / 2 *1)*10)/10","unit":"mL is pancuronium 2mg/ml."},{"formula":"Math.round((.1 * (weight *load-units) /10 *5)*10)/10","unit":"mL to "},{"formula":"Math.round((.2 * (weight *load-units) /10 *5)*10)/10","unit":"mL is vercuronium 10mg/5mL*."},{"formula":"Math.round((0.08 * (weight *load-units) /10 *5)*10)/10","unit":"mL to"},{"formula":"Math.round((0.1 * (weight *load-units) /10 *5)*10)/10","unit":"mL is pipecuronium 10mg/5mL* and"},{"formula":"Math.round((0.6 * (weight *load-units) /10 *1)*10)/10","unit":"mL to"},{"formula":"Math.round((1 * (weight *load-units) /10 *1)*10)/10","unit":"mL is rocuronium 10mg/mL"}],
"formula_html":"<div id='formula_label'>Formula : </div><div id='formula_value'><table cellspacing='0' cellpadding='1' border='0'><tbody><tr><td bgcolor=''><p align='center'>&nbsp;Long-acting (+60 min)</p></td></tr><tr><td bgcolor=''>&nbsp;</td></tr><tr><td bgcolor=''>pancuronium 0.08-0.12 mg/kg</td></tr><tr><td bgcolor=''>metocurine 0.3-0.4 mg/kg</td></tr><tr><td bgcolor=''>d-tubocurarine 0.5-0.6 mg/kg</td></tr><tr><td bgcolor=''>doxacurium 0.05-0.08 mg/kg</td></tr><tr><td bgcolor=''>pipecuronium 0.08-0.1 mg/kg</td></tr><tr><td>&nbsp;</td></tr><tr><td><p align='center'>Intermediate-acting (40-50min)</p></td></tr><tr><td></td></tr><tr><td>vercronium 0.1-0.2 mg/kg</td></tr><tr><td>atracurium 0.5-0.6 mg/kg</td></tr><tr><td>cisatracurium 0.15-0.2 mg/kg</td></tr><tr><td>ocuronium 0.6-1.0 mg/kg</td></tr><tr><td>&nbsp;</td></tr><tr><td bgcolor=''><p align='center'>Short-acting (15-20 min)</p></td></tr><tr><td bgcolor=''>mivacurium 0.2-0.25 mg/kg</td></tr><tr><td><p align='left'>&nbsp;</p></td></tr><tr><td><p align='center'>Ultra-short-acting (6-8 min)</p></td></tr><tr><td>succinylcholine 1 mg/kg</td></tr></tbody></table></div>"
}



];
