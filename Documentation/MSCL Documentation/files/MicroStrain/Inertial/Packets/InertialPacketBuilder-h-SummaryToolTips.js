NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Packets/InertialPacketBuilder.h",{901:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype901\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">InertialPacketBuilder</div></div></div><div class=\"TTSummary\">A helper class to make it simple to create Inertial Packets</div></div>",903:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype903\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InertialPacketBuilder(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">descriptorSet,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">InertialDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an InertialPacketBuilder object</div></div>",905:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype905\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_descriptorSet</div><div class=\"TTSummary\">The MIP Descriptor Set for the packet</div></div>",906:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype906\" class=\"NDPrototype NoParameterForm\">std::vector&lt;InertialDataField&gt; m_fields</div><div class=\"TTSummary\">The vector of InertialDataFields that are in the Inertial Packet</div></div>",908:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype908\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">InertialDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a field to the vector of fields for this packet</div></div>",909:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype909\" class=\"NDPrototype NoParameterForm\">ByteStream buildPacket()</div><div class=\"TTSummary\">Takes the given packet information, including all fields, and builds an Inertial Packet as a ByteStream</div></div>"});