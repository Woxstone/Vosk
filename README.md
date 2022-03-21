 /** Configures recognizer to output n-best results
     *
     * <pre>
     *   {
     *      "alternatives": [
     *          { "text": "one two three four five", "confidence": 0.97 },
     *          { "text": "one two three for five", "confidence": 0.03 },
     *      ]
     *   }
     * </pre>
     *
     * @param max_alternatives - maximum alternatives to return from recognition results
     */
    setMaxAlternatives(max_alternatives) {
        libvosk.vosk_recognizer_set_max_alternatives(this.handle, max_alternatives);
    }

    /** Configures recognizer to output words with times
     *
     * <pre>
     *   "result" : [{
     *       "conf" : 1.000000,
     *       "end" : 1.110000,
     *       "start" : 0.870000,
     *       "word" : "what"
     *     }, {
     *       "conf" : 1.000000,
     *       "end" : 1.530000,
     *       "start" : 1.110000,
     *       "word" : "zero"
     *     }, {
     *       "conf" : 1.000000,
     *       "end" : 1.950000,
     *       "start" : 1.530000,
     *       "word" : "zero"
     *     }, {
     *       "conf" : 1.000000,
     *       "end" : 2.340000,
     *       "start" : 1.950000,
     *       "word" : "zero"
     *     }, {
     *       "conf" : 1.000000,
     *       "end" : 2.610000,
     *       "start" : 2.340000,
     *       "word" : "one"
     *     }],
     * </pre>
     *
     * @param words - boolean value
     */