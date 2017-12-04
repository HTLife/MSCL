NDSummary.OnToolTipsLoaded("CClass:MagnetometerSoftIronMatrix",{303:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype303\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MagnetometerSoftIronMatrix</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial MagnetometerSoftIronMatrix command.</div></div>",305:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype305\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",306:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype306\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MagnetometerSoftIronMatrix MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Matrix_3x3&nbsp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The Matrix_3x3 object to set.</div></div>",307:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype307\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> MagnetometerSoftIronMatrix MakeGetCommand()</div></div>",308:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype308\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Matrix_3x3 getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericInertialCommandResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",309:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype309\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",310:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a MagnetometerSoftIronMatrix object.&nbsp; Use Make___Command methods to create an object.</div></div>",311:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype311\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> InertialTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",312:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype312\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",313:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype313\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",315:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype315\" class=\"NDPrototype NoParameterForm\">Matrix_3x3 m_matrix</div><div class=\"TTSummary\">The Matrix_3x3 to send to the device.</div></div>",316:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype316\" class=\"NDPrototype NoParameterForm\">InertialTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>"});