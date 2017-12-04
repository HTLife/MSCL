NDContentPage.OnToolTipsLoaded({4204:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The types of data that can be transmitted in data packets.</div></div>",4267:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the different trigger types that can cause a datalogging session to be logged to a Wireless Node.</div></div>",5002:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5002\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain wireless node</div></div>",5287:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5287\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeMemory</div></div></div><div class=\"TTSummary\">Provides easy access to the datalogging memory on a WirelessNode.</div></div>",5367:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5367\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">LoggedDataSweep</div></div></div><div class=\"TTSummary\">Represents 1 data sweep that was logged to a WirelessNode.</div></div>",5456:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5456\" class=\"NDPrototype NoParameterForm\">LoggedDataSweep getNextData()</div><div class=\"TTSummary\">Gets the next LoggedDataSweep that is logged to the Node.</div></div>",5457:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5457\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> metaDataUpdated() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the any of the meta data (sample rate, cal coefficients, etc) has been updated since the last call to getNextData.&nbsp; This will be true for a single LoggedDataSweep (after calling getNextData), signifying that you should interrogate all of the meta data on this DatalogDownloader object again to get updated information which may have changed.</div></div>",5459:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5459\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> startOfSession() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether a new datalogging session has been found (after calling getNextData). This will be true for a single LoggedDataSweep.&nbsp; Note: May be changed whenever metaDataUpdated returns true.</div></div>",5512:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5512\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelMask</div></div></div><div class=\"TTSummary\">Represents the channel mask (active and inactive channels) for a WirelessNode.</div></div>",5568:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5568\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">CalCoefficients</div></div></div><div class=\"TTSummary\">Represents calibration coefficients that can be applied to a Wireless Node.</div></div>",6071:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6071\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SampleRate</div></div></div><div class=\"TTSummary\">Represents a MicroStrain sample rate (rate at which data is sampling)</div></div>",6330:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6330\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NotSupported</div></div></div><div class=\"TTSummary\">A command/feature was attempted to be used that was not supported.</div></div>",6334:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6334\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NoData</div></div></div><div class=\"TTSummary\">There is no data available to be accessed</div></div>",6349:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6349\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NodeCommunication</div></div></div><div class=\"TTSummary\">The exception for failing to communicate with a WirelessNode.</div></div>",6356:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6356\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Connection</div></div></div><div class=\"TTSummary\">The generic connection exception.</div></div>",});