NDSummary.OnToolTipsLoaded("File:Exceptions.h",{1426:"<div class=\"NDToolTip TSection LC\"><div class=\"TTSummary\">Contains all the MicroStrain custom exceptions that can be thrown in MSCL</div></div>",1427:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1427\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error</div></div></div><div class=\"TTSummary\">The generic MicroStrain exception (base class)</div></div>",1428:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1428\" class=\"NDPrototype NoParameterForm\">Error() : m_description(<span class=\"SHString\">&quot;MSCL has thrown an exception.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error object with the default description</div></div>",1429:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1429\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : m_description(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error object with a custom description</div></div>",1430:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1430\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const char</span>* what () <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">overriding the default std::exception what() function, gets the description of the thrown exception</div></div>",1431:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1431\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NotSupported</div></div></div><div class=\"TTSummary\">A command/feature was attempted to be used that was not supported.</div></div>",1432:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1432\" class=\"NDPrototype NoParameterForm\">Error_NotSupported(): Error(<span class=\"SHString\">&quot;This feature is not supported.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error_NotSupported object with a default description</div></div>",1433:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1433\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_NotSupported(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : Error(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_NotSupported object with a custom description</div></div>",1434:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1434\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NoData</div></div></div><div class=\"TTSummary\">There is no data available to be accessed</div></div>",1435:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1435\" class=\"NDPrototype NoParameterForm\">Error_NoData(): Error(<span class=\"SHString\">&quot;No data is available.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error_NoData object with a default description</div></div>",1436:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1436\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_NoData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">): Error(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_NoData object with a custom description</div></div>",1437:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1437\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_BadDataType</div></div></div><div class=\"TTSummary\">Data of one type was accessed as another type (simple_any)</div></div>",1438:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1438\" class=\"NDPrototype NoParameterForm\">Error_BadDataType() : Error(<span class=\"SHString\">&quot;Data was accessed using the wrong data type.&quot;</span>)</div><div class=\"TTSummary\">Intializes the Error_BadDataType object with a default description</div></div>",1439:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1439\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_UnknownSampleRate</div></div></div><div class=\"TTSummary\">The sample rate is invalid or unknown for the given device</div></div>",1440:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1440\" class=\"NDPrototype NoParameterForm\">Error_UnknownSampleRate() : Error(<span class=\"SHString\">&quot;Unknown Sample Rate.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error_UnknownSampleRate object with a default description</div></div>",1441:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1441\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_UnknownSampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : Error(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_UnknownSampleRate object with a custom description</div></div>",1442:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1442\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Communication</div></div></div><div class=\"TTSummary\">The exception for failing to communicate with a device.</div></div>",1443:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1443\" class=\"NDPrototype NoParameterForm\">Error_Communication() : Error(<span class=\"SHString\">&quot;Failed to communicate with the device.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error_Communication object.</div></div>",1444:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1444\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_Communication(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : Error(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_Communication object.</div></div>",1445:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1445\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NodeCommunication</div></div></div><div class=\"TTSummary\">The exception for failing to communicate with a WirelessNode.</div></div>",1446:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1446\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_NodeCommunication(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">): Error_Communication(<span class=\"SHString\">&quot;Failed to communicate with the Wireless Node.&quot;</span>), m_nodeAddress(nodeAddress)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_NodeCommunication object.</div></div>",1447:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1447\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_NodeCommunication(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">): Error_Communication(description), m_nodeAddress(nodeAddress)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_NodeCommunication object.</div></div>",1448:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1448\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const uint16</span> nodeAddress() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">gets the node address of the WirelessNode that failed to communicate</div></div>",1449:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1449\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Connection</div></div></div><div class=\"TTSummary\">The generic connection exception.</div></div>",1450:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1450\" class=\"NDPrototype NoParameterForm\">Error_Connection(): Error(<span class=\"SHString\">&quot;Connection error.&quot;</span>), m_code(<span class=\"SHNumber\">-1</span>)</div><div class=\"TTSummary\">Initializes the Error_Connection object, sets the error code to a default of -1</div></div>",1451:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1451\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_Connection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">code</td></tr></table></td><td class=\"PAfterParameters\">): Error(<span class=\"SHString\">&quot;Connection error.&quot;</span>), m_code(code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_Connection object</div></div>",1452:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1452\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_Connection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">): Error(description), m_code(<span class=\"SHNumber\">-1</span>)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_Connection object</div></div>",1453:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1453\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_Connection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">code</td></tr></table></td><td class=\"PAfterParameters\">): Error(description), m_code(code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_Connection object</div></div>",1454:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1454\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const int</span> code() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">gets the exception error code (system error codes, or -1 by default)</div></div>",1455:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1455\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidSerialPort</div></div></div><div class=\"TTSummary\">There was an error with the specified COM Port.</div></div>",1456:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1456\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidSerialPort(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">code</td></tr></table></td><td class=\"PAfterParameters\">): Error_Connection(<span class=\"SHString\">&quot;Invalid Com Port.&quot;</span>, code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidSerialPort object</div></div>",1457:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1457\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidTcpServer</div></div></div><div class=\"TTSummary\">There was an error with the specified TCP/IP Server.</div></div>",1458:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1458\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidTcpServer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">code,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">message</td></tr></table></td><td class=\"PAfterParameters\">): Error_Connection(<span class=\"SHString\">&quot;Invalid TCP/IP Server: &quot;</span> + message, code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidTcpServer object</div></div>",1459:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1459\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidUnixSocket</div></div></div><div class=\"TTSummary\">There was an error with the specified Unix Socket.</div></div>",1460:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1460\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidUnixSocket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">code,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">message</td></tr></table></td><td class=\"PAfterParameters\">): Error_Connection(<span class=\"SHString\">&quot;Invalid Unix Socket: &quot;</span> + message, code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidUnixSocket object</div></div>",1461:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1461\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InertialCmdFailed</div></div></div><div class=\"TTSummary\">The Inertial command has failed</div></div>",1462:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1462\" class=\"NDPrototype NoParameterForm\">Error_InertialCmdFailed(): Error(<span class=\"SHString\">&quot;The Inertial command has failed.&quot;</span>), m_code(<span class=\"SHNumber\">-1</span>)</div><div class=\"TTSummary\">Initializes the Error_InertialCmdFailed object, sets the error code to a default of -1</div></div>",1463:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1463\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InertialCmdFailed(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">code</td></tr></table></td><td class=\"PAfterParameters\">): Error(<span class=\"SHString\">&quot;The Inertial command has failed.&quot;</span>), m_code(code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InertialCmdFailed object</div></div>",1464:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1464\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const int</span> code() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">gets the exception error code</div></div>",1465:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1465\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidConfig</div></div></div><div class=\"TTSummary\">The Configuration is invalid.</div></div>",1466:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1466\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">issues</td></tr></table></td><td class=\"PAfterParameters\">): Error(<span class=\"SHString\">&quot;Invalid Configuration.&quot;</span>), m_issues(issues)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidConfig object</div></div>",1467:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1467\" class=\"NDPrototype NoParameterForm\">ConfigIssues issues() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">Gets the ConfigIssues that caused the invalid configuration exception.</div></div>",1468:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1468\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidNodeConfig</div></div></div><div class=\"TTSummary\">The Configuration for a WirelessNode is invalid.</div></div>",1469:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1469\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidNodeConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">issues,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">) : Error_InvalidConfig(issues), m_nodeAddress(nodeAddress)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidNodeConfig object</div></div>",1470:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1470\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const uint16</span> nodeAddress() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">Gets the node address of the Node that this exception pertains to.</div></div>"});