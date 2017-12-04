NDSummary.OnToolTipsLoaded("CClass:InertialParser",{1508:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1508\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">InertialParser</div></div></div><div class=\"TTSummary\">Parsers all inertial data and stores it in a corresponding container</div></div>",1510:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1510\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InertialParser(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">InertialPacketCollector&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">packetCollector,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td></td><td class=\"PName last\">responseCollector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor for InertialParser</div></div>",1512:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1512\" class=\"NDPrototype NoParameterForm\">InertialPacketCollector* m_packetCollector</div><div class=\"TTSummary\">The InertialPacketCollector associated with this parser and it\'s parent device</div></div>",1513:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1513\" class=\"NDPrototype NoParameterForm\">std::weak_ptr&lt;ResponseCollector&gt; m_responseCollector</div><div class=\"TTSummary\">The ResponseCollector associated with this parser and it\'s parent device</div></div>",1515:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1515\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> processPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">InertialPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes an InertialPacket, adds it to the data container if it is a data packet, or adds it to the appropriate handler depending on the packet type</div></div>",1516:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1516\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> findMatchingResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">InertialPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes an InertialPacket and checks if the packet collector has any responses it is waiting on.&nbsp; If it does, and the packet matches the expected response, the packet is &quot;given&quot; to the packet collector.</div></div>",1517:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1517\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InertialDataFields parseFields(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">InertialPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parses the InertialDataFields out of the InertialPacket and returns them in a container.</div></div>",1518:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1518\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InertialParseResult parseAsPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"PType first\">InertialPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a DataBuffer that has had its read position moved to the start of a packet and verifies that the bytes form a valid Inertial (MIP) packet</div></div>",1519:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1519\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> findPacketInBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks for packets after the current bytes buffer\'s read position (starting at the next byte, not the current one).&nbsp; If a packet is found, the packet is processed and the byte buffer\'s read position is moved.&nbsp; If a packet is not found, nothing changes in the byte buffer</div></div>",1520:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1520\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a DataBuffer and finds the next MIP Inertial Packet, or the next command response that is expected by the base station.</div></div>"});