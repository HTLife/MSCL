NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/ExternalHeadingUpdateWithTimestamp.h",{601:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype601\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ExternalHeadingUpdateWithTimestamp</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial ExternalHeadingUpdateWithTimestamp command.</div></div>",603:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype603\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",604:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype604\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ExternalHeadingUpdateWithTimestamp MakeCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">HeadingData&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">headingData,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">TimeUpdate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">timestamp</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",605:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype605\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",606:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a ExternalHeadingUpdateWithTimestamp object from a HeadingData and a TimeUpdate.</div></div>",607:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype607\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> InertialTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",608:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype608\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",609:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype609\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",611:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The HeadingData to send to the device.</div></div>",612:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype612\" class=\"NDPrototype NoParameterForm\">TimeUpdate m_Timestamp</div><div class=\"TTSummary\">The TimeUpdate timestamp to send to the device.</div></div>"});