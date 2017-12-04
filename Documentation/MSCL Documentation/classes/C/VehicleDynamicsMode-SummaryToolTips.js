NDSummary.OnToolTipsLoaded("CClass:VehicleDynamicsMode",{204:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype204\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">VehicleDynamicsMode</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial VehicleDynamicsMode command.</div></div>",206:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype206\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",207:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype207\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> VehicleDynamicsMode MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">VehicleModeType&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">vehicleType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The &lt;VehicleModeType&gt; object to set.</div></div>",208:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype208\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> VehicleDynamicsMode MakeGetCommand()</div></div>",209:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype209\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> VehicleModeType getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericInertialCommandResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",210:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype210\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",211:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a VehicleDynamicsMode object.&nbsp; Use Make___Command methods to create an object.</div></div>",212:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype212\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> InertialTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",213:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype213\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",214:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype214\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",216:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype216\" class=\"NDPrototype NoParameterForm\">VehicleModeType m_VehicleType</div><div class=\"TTSummary\">The uint8 to send to the device.</div></div>",217:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype217\" class=\"NDPrototype NoParameterForm\">InertialTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>"});